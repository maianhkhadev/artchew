import { Modal, ModalContent } from 'rebear';
import styles from './ModalStudentDetails.module.scss';

type ModalStudentDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: string;
};

export const ModalStudentDetails = (props: ModalStudentDetailsProps) => {
  const { open, onOpenChange, content } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange} className={styles.modal}>
      <ModalContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ModalContent>
    </Modal>
  );
};

export default ModalStudentDetails;
