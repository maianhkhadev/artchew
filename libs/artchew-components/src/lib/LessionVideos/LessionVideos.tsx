'use client';
import Link from 'next/link';
import { Title, Paragraph } from 'rebear';
import { useLessions } from '@artchew/data-access-lessions';
import styles from './LessionVideos.module.scss';

export const LessionVideos = () => {
  const { data = [] } = useLessions();

  return (
    <section className={styles.section}>
      <main className={styles.sectionContent}>
        {data.map((item) => (
          <Link
            key={item.id}
            className={styles.video}
            href={`/video/${item.id}`}
          >
            <img src={item.thumbnailUrl} alt="artchew" />
            <main className={styles.videoContent}>
              <Title className={styles.title} level={6}>
                {item.title}
              </Title>
              <Paragraph size="sm">5:30</Paragraph>
            </main>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default LessionVideos;
