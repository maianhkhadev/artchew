'use client';
import { redirect } from 'next/navigation';
import { Title } from 'rebear';
import MuxPlayer from '@mux/mux-player-react';
import { useLession } from '@artchew/data-access-lessions';

export const VideoViewer = () => {
  const { data: lession } = useLession("1");

  if (!lession) {
    redirect('/');
  }

  return (
    <section>
      <main>
        <MuxPlayer
          playbackId="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
          // metadata={{
          //   video_id: 'video-id-123456',
          //   video_title: 'Bick Buck Bunny',
          //   viewer_user_id: 'user-id-bc-789',
          // }}
        />
      </main>
      <footer>
        <Title level={3}>{lession.title}</Title>
      </footer>
    </section>
  );
};

export default VideoViewer;
