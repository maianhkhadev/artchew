import { randomUUID } from 'node:crypto';
import { getDb } from '../db';

export type StudentPayload = {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  password?: string;
  time: string;
  status: string;
};

export type StudentRecord = StudentPayload & {
  _id: string;
};

const editableFields = [
  'name',
  'email',
  'phone',
  'courseId',
  'password',
  'time',
  'status',
] as const;

const normalizeStudent = (payload: Partial<StudentPayload>): StudentPayload => ({
  name: payload.name ?? '',
  email: payload.email ?? '',
  phone: payload.phone ?? '',
  courseId: payload.courseId ?? '',
  password: payload.password ?? '',
  time: payload.time ?? '',
  status: payload.status ?? 'registered',
});

export const Student = {
  findAll() {
    return getDb()
      .prepare('SELECT * FROM students ORDER BY rowid DESC')
      .all() as StudentRecord[];
  },

  findById(id: string) {
    return getDb()
      .prepare('SELECT * FROM students WHERE _id = ?')
      .get(id) as StudentRecord | undefined;
  },

  findByCredentials(email: string, password: string) {
    return getDb()
      .prepare('SELECT * FROM students WHERE email = ? AND password = ?')
      .get(email, password) as StudentRecord | undefined;
  },

  create(payload: Partial<StudentPayload>) {
    const student = normalizeStudent({
      ...payload,
      status: 'registered',
    });
    const id = randomUUID();

    getDb()
      .prepare(
        `
          INSERT INTO students (
            _id, name, email, phone, courseId, password, time, status
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `
      )
      .run(
        id,
        student.name,
        student.email,
        student.phone,
        student.courseId,
        student.password,
        student.time,
        student.status
      );

    return this.findById(id) as StudentRecord;
  },

  update(id: string, payload: Partial<StudentPayload>) {
    const updates = editableFields.filter((field) => payload[field] !== undefined);

    if (updates.length === 0) {
      return this.findById(id);
    }

    const setClause = updates.map((field) => `${field} = ?`).join(', ');
    const values = updates.map((field) => payload[field]);

    getDb()
      .prepare(`UPDATE students SET ${setClause} WHERE _id = ?`)
      .run(...values, id);

    return this.findById(id);
  },

  delete(id: string) {
    const student = this.findById(id);

    if (!student) {
      return undefined;
    }

    getDb().prepare('DELETE FROM students WHERE _id = ?').run(id);

    return student;
  },
};

export default Student;
