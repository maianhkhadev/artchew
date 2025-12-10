import { Modal, ModalContent } from 'rebear';
import styles from './ModalFriendDetails.module.scss';

type ModalFriendDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: string;
};

export const ModalFriendDetails = (props: ModalFriendDetailsProps) => {
  const { open, onOpenChange, content } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange} className={styles.modal}>
      <ModalContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ModalContent>
    </Modal>
  );
};

export default ModalFriendDetails;
