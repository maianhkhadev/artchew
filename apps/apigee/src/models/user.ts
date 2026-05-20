import { getDb } from '../db';

export type UserRecord = {
  _id: string;
  username: string;
  password: string;
  name?: string;
};

export const User = {
  findByCredentials(username: string, password: string) {
    return getDb()
      .prepare('SELECT * FROM users WHERE username = ? AND password = ?')
      .get(username, password) as UserRecord | undefined;
  },
};

export default User;
