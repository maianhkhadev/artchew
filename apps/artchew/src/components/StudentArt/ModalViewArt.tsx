import { Modal, ModalContent } from 'rebear';
import styles from './ModalViewArt.module.scss';

type ModalViewArtProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  thumbnailUrl: string;
};

export const ModalViewArt = (props: ModalViewArtProps) => {
  const { open, onOpenChange, thumbnailUrl } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange} className={styles.modal}>
      <ModalContent>
        <img className={styles.thumbnail} src={thumbnailUrl} alt="" />
      </ModalContent>
    </Modal>
  );
};

export default ModalViewArt;
