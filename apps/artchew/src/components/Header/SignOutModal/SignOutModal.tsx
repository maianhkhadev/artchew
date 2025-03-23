import { Modal, ModalContent, Title, Button } from 'rebear';
import { useAuthStore } from '@artchew/rebear-auth-lib';
import styles from './SignOutModal.module.scss';

type SignOutModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SignOutModal = (props: SignOutModalProps) => {
  const { open, onOpenChange } = props;
  const setToken = useAuthStore((state) => state.setToken);

  const handleClick = () => {
    setToken(undefined);
    onOpenChange(false)
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <div className={styles.modalContent}>
          <Title level={3}>Đăng xuất tài khoản</Title>
          <br />
          <br />
          <Button variant="secondary" size="2xl" onClick={handleClick}>
            Đăng xuất khỏi tài khoản này
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SignOutModal;
