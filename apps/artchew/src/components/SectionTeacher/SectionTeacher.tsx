'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Title, Paragraph, Button } from 'rebear';
import { SectionDefault } from '../SectionDefault';
import { BioModal } from './BioModal';
import styles from './SectionTeacher.module.scss';
import src from './teacher-01.png';

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
          <Title level={3}>Hoàng Người Đá</Title>
          <Paragraph>
            Họa sĩ Minh Họa Người Đá (tên thật Phạm Minh Hoàng), sinh năm 1991, có hơn 10 năm hoạt động Minh Họa & Sáng Tạo trong mảng Truyền Thông & Quảng Cáo, từng hợp tác cùng nhiều nhãn hàng lớn, dẫn dắt nhiều dự án sáng tạo đạt giải thưởng trong nước lẫn quốc tế. 
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
