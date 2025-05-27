import { Modal, ModalContent, Title, Paragraph } from 'rebear';
import styles from './ModalReviewDetails.module.scss';

type ModalReviewDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  avatarUrl: string;
  name: string;
  content: string;
};

export const ModalReviewDetails = (props: ModalReviewDetailsProps) => {
  const { open, onOpenChange, avatarUrl, name, content } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange} className={styles.modal}>
      <ModalContent>
        <div className={styles.content}>
          <img src={avatarUrl} alt="" />

          <div>
            <Title level={3}>{name}</Title>
            <Paragraph>{content}</Paragraph>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalReviewDetails;
