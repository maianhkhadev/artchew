'use client';
import { useState } from 'react';
import { Title, Paragraph } from 'rebear';
import { ModalViewArt } from './ModalViewArt';
import styles from './StudentArt.module.scss';

type StudentArtProps = {
  thumbnailUrl: string;
  name: string;
  artist: string;
  courseName: string;
  year: string;
};

export const StudentArt = (props: StudentArtProps) => {
  const { thumbnailUrl, name, artist, courseName, year } = props;
  const [open, onOpenChange] = useState(false);

  const handleClick = () => {
    onOpenChange(true);
  }

  return (
    <>
      <div className={styles.studentArt} onClick={handleClick}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
        <Title className={styles.name} level={3}>
          {name}
        </Title>
        <Paragraph>Tác giả: {artist}</Paragraph>
        <Paragraph>Khoá học: {courseName}</Paragraph>
        <Paragraph>Năm học: {year}</Paragraph>
      </div>

      <ModalViewArt
        open={open}
        onOpenChange={onOpenChange}
        thumbnailUrl={thumbnailUrl}
      />
    </>
  );
};

export default StudentArt;
