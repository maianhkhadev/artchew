import { Form, FormItem, Input, Password, Button } from 'rebear';

type FormLoginProps = {
  isLoading: boolean;
  onSubmit: (values: any) => void;
};

const DEFAULT_VALUES = { email: '', password: '' };

export function FormLogin(props: FormLoginProps) {
  const { onSubmit } = props;

  return (
    <Form defaultValues={DEFAULT_VALUES} onSubmit={onSubmit}>
      <FormItem
        name="email"
        label="Email"
        rules={{ required: true }}
        element={<Input />}
      />

      <FormItem name="password" label="Password" element={<Password />} />

      <Button variant="primary" block>
        Submit
      </Button>
    </Form>
  );
}

export default FormLogin;
