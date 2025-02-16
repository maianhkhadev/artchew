import { useState } from 'react';
import Image from 'next/image';
import { Modal, ModalContent, Title, Paragraph } from 'rebear';
import styles from './BioModal.module.scss';
import src from './teacher-02.jpeg';

type BioModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const BioModal = (props: BioModalProps) => {
  const { open, onOpenChange } = props;

  return (
    <Modal
      width={800}
      className={styles.modal}
      open={open}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <div className={styles.content}>
          <Image src={src} alt="" />

          <div>
            <Title level={3}>NGƯỜI ĐÁ</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Paragraph>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default BioModal;
