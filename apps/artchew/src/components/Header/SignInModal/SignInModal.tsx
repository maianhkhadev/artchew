import {
  Modal,
  ModalContent,
  Title,
  Form,
  FormItem,
  Input,
  Password,
  Button,
} from 'rebear';
import styles from './SignInModal.module.scss';

type SignInModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SignInModal = (props: SignInModalProps) => {
  const { open, onOpenChange } = props;

  const handleSubmit = (values: unknown) => {
    const formData = values as never;
    console.log(formData);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className={styles.modalContent}>
          <Title level={3}>Đăng nhập tài khoản</Title>
          <br />
          <br />
          <Form defaultValues={{}} onSubmit={handleSubmit}>
            <FormItem
              name="email"
              label="Mail đăng nhập"
              rules={{ required: true }}
              element={<Input />}
            />

            <FormItem
              name="passowrd"
              label="Password"
              rules={{ required: true }}
              element={<Password />}
            />

            <Button variant="secondary" size="2xl">
              Gửi
            </Button>
          </Form>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;
