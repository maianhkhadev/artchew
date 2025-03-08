import {
  Form,
  FormItem,
  Input,
  Password,
  Button,
} from 'rebear';

type FormLoginProps = {
  isLoading: boolean;
  onSubmit: (values: any) => void;
};

export function FormLogin(props: FormLoginProps) {
  const { onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <FormItem
        name="email"
        label="Email"
        rules={{ required: true }}
        controller={<Input />}
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

export default FormLogin;
