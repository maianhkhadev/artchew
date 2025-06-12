'use client';
import { useMemo } from 'react';
import { Title, Paragraph } from 'rebear';
import { SectionDefault } from '../SectionDefault';
import styles from './SectionStudentDetails.module.scss';
import data from './reviews.json';

type SectionStudentDetailsProps = {
  id: string;
};

export const SectionStudentDetails = (props: SectionStudentDetailsProps) => {
  const { id } = props;

  const item = useMemo(() => {
    const intId = parseInt(id);
    return data.find((i) => i.id === intId);
  }, [id]);

  return (
    <SectionDefault title="Thông tin học viên">
      <main className={styles.content}>
        <img src={item?.avatarUrl} alt="" />

        <div>
          <Title level={3}>{item?.name}</Title>
          <Paragraph>{item?.content}</Paragraph>
        </div>
      </main>
    </SectionDefault>
  );
};

export default SectionStudentDetails;
