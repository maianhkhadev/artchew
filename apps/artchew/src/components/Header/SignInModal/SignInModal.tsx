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
import { useAuthStudent } from '@artchew/data-access-students';
import { useAuthStore } from '@artchew/rebear-auth-lib';
import styles from './SignInModal.module.scss';

type SignInModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SignInModal = (props: SignInModalProps) => {
  const { open, onOpenChange } = props;
  // const setToken = useAuthStore((state) => state.setToken);
  const { mutate } = useAuthStudent();

  const handleSubmit = (values: unknown) => {
    const formData = values as never;
    console.log(formData)
    mutate(formData, {
      onSuccess: (data) => {
        console.log(data);
        onOpenChange(false);
      },
    });
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
              name="password"
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
