'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Title, Paragraph, Button } from 'rebear';
import { SectionDefault } from '../SectionDefault';
import { BioModal } from './BioModal';
import styles from './SectionTeacher.module.scss';
import src from './teacher-01.svg';

export const SectionTeacher = () => {
  const [open, onOpenChange] = useState<boolean>(false);

  const handleShow = () => {
    onOpenChange(true);
  };

  return (
    <SectionDefault title="Giáo viên">
      <div className={styles.content}>
        <Image src={src} alt="" />

        <div className={styles.information}>
          <Title level={3}>NGƯỜI ĐÁ</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Paragraph>
          <Button variant="tertiary" size="2xl" block onClick={handleShow}>
            Xem thêm
          </Button>
        </div>
      </div>

      <BioModal open={open} onOpenChange={onOpenChange} />
    </SectionDefault>
  );
};

export default SectionTeacher;
