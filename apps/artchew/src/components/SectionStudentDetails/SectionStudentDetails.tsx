'use client';
import { useMemo } from 'react';
import { Title, Paragraph } from 'rebear';
import { SectionDefault } from '../SectionDefault';
import { useReviews } from '@artchew/data-access-students';
import styles from './SectionStudentDetails.module.scss';

type SectionStudentDetailsProps = {
  id: string;
};

export const SectionStudentDetails = (props: SectionStudentDetailsProps) => {
  const { id } = props;
  const { data: reviews = [] } = useReviews();

  const item = useMemo(() => {
    const intId = parseInt(id);
    return reviews.find((i) => i.id === intId);
  }, [id]);

  return (
    <SectionDefault title="Human of Artchew">
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
