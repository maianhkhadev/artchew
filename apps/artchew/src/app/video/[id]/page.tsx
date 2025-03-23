import { Container, LessionVideos, VideoViewer } from '@artchew/artchew-components';
import styles from './page.module.scss';

export default function Video() {
  return (
    <div className={styles.page}>
      <Container>
        <main className={styles.pageContent}>
          <VideoViewer />
          <LessionVideos />
        </main>
      </Container>
    </div>
  );
}
