import Image from 'next/image';
import { Modal, ModalContent } from 'rebear';
import styles from './BioModal.module.scss';
import src from './bio.jpg';

type BioModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const BioModal = (props: BioModalProps) => {
  const { open, onOpenChange } = props;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      className={styles.modal}
    >
      <ModalContent>
        <Image src={src} alt="" />
      </ModalContent>
    </Modal>
  );
};

export default BioModal;
