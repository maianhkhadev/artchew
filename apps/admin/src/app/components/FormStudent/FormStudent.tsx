import { Form, FormItem, Input, Select, SelectOption, Button } from 'rebear';
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
          <Select>
            <SelectOption value="1" label="Bộ video tự học" />
            <SelectOption value="2" label="Lớp online google meet" />
            <SelectOption value="3" label="Lớp học trực tiếp" />
          </Select>
        }
      />

      <FormItem
        name="time"
        label="Study shift"
        rules={{ required: true }}
        element={<Input />}
      />

      <FormItem
        name="status"
        label="Status"
        rules={{ required: true }}
        element={
          <Select>
            <SelectOption value="registered" label="Registered" />
            <SelectOption value="active" label="Active" />
            <SelectOption value="inactive" label="Inactive" />
          </Select>
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
