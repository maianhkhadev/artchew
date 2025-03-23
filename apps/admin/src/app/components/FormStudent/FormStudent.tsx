import { Form, FormItem, Input, Select, Button } from 'rebear';
import { Student } from '@artchew/data-access-students';

type FormStudentProps = {
  isLoading: boolean;
  data?: Student;
  onSubmit: (values: any) => void;
};

export function FormStudent(props: FormStudentProps) {
  const { isLoading, data, onSubmit } = props;

  return (
    <Form defaultValues={data} onSubmit={onSubmit}>
      <FormItem
        name="name"
        label="Fullname"
        rules={{ required: true }}
        element={<Input />}
      />

      <FormItem
        name="email"
        label="Email"
        rules={{ required: true }}
        element={<Input />}
      />

      <FormItem
        name="phone"
        label="Phone"
        rules={{ required: true }}
        element={<Input />}
      />

      <FormItem
        name="courseId"
        label="Course"
        rules={{ required: true }}
        element={
          <Select
            options={[
              { value: '1', label: 'Bộ video tự học' },
              { value: '2', label: 'Lớp online google meet' },
              { value: '3', label: 'Lớp học trực tiếp' },
            ]}
          />
        }
      />

      <FormItem
        name="time"
        label="Study shift"
        rules={{ required: true }}
        element={
          <Select
            options={[
              { value: '08:00', label: '08:00' },
              { value: '10:00', label: '10:00' },
              { value: '13:00', label: '13:00' },
              { value: '15:00', label: '15:00' },
              { value: '17:00', label: '17:00' },
              { value: '19:00', label: '19:00' },
              { value: '21:00', label: '21:00' },
            ]}
          />
        }
      />

      <FormItem
        name="status"
        label="Status"
        rules={{ required: true }}
        element={
          <Select
            options={[
              { value: 'registered', label: 'Registered' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        }
      />

      <FormItem name="password" label="Password" element={<Input />} />

      <Button variant="primary" disabled={isLoading} block>
        Submit
      </Button>
    </Form>
  );
}

export default FormStudent;
