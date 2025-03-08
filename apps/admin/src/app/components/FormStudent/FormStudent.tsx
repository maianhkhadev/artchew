import { useState } from 'react';
import {
  Form,
  FormItem,
  Input,
  Select,
  SelectOption,
  Password,
  Button,
} from 'rebear';
import { Student } from '@artchew/data-access-students';

type FormStudentProps = {
  isLoading: boolean;
  data?: Student;
  onSubmit: (values: any) => void;
};

export function FormStudent(props: FormStudentProps) {
  const { data, onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <FormItem
        name="fullname"
        label="Fullname"
        rules={{ required: true }}
        controller={<Input />}
      />

      <FormItem
        name="email"
        label="Email"
        rules={{ required: true }}
        controller={<Input />}
      />

      <FormItem
        name="phone"
        label="Phone"
        rules={{ required: true }}
        controller={<Input />}
      />

      <FormItem
        name="service"
        label="Service"
        rules={{ required: true }}
        controller={
          <Select value={1}>
            <SelectOption value={1} label="Bộ video tự học" />
            <SelectOption value={2} label="Lớp online google meet" />
            <SelectOption value={3} label="Lớp học trực tiếp" />
          </Select>
        }
      />

      <FormItem
        name="status"
        label="Status"
        rules={{ required: true }}
        controller={
          <Select value={1}>
            <SelectOption value={1} label="Registerd" />
            <SelectOption value={2} label="Active" />
            <SelectOption value={3} label="Inactive" />
          </Select>
        }
      />

      <FormItem
        name="password"
        label="Password"
        controller={<Password />}
      />

      <Button variant="primary" block>
        Submit
      </Button>
    </Form>
  );
}

export default FormStudent;
