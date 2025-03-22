'use client';
import { Title, Paragraph } from 'rebear';
import { useLessions } from '@artchew/data-access-lessions';
import styles from './LessionVideo.module.scss';

export const LessionVideos = () => {
  const { data = [] } = useLessions();

  return (
    <section>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.video}>
            <img src={item.thumbnailUrl} alt="artchew" />
            <main className={styles.videoContent}>
              <Title className={styles.title} level={6}>{item.title}</Title>
              <Paragraph>5:30</Paragraph>
            </main>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LessionVideos;
