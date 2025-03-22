import { LessionVideos, VideoViewer } from '@artchew/artchew-components';
import styles from './page.module.scss';

export default function Video() {
  return (
    <div className={styles.page}>
      <VideoViewer />
      <LessionVideos />
    </div>
  );
}
