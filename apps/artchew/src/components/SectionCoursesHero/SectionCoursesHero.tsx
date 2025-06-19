/* eslint-disable @next/next/no-img-element */
'use client';
import { Paragraph } from 'rebear';
import Image from 'next/image';
import { SectionDefault } from '../SectionDefault';
import styles from './SectionCoursesHero.module.scss';
import src from './image.jpg';

export const SectionCoursesHero = () => {
  return (
    <SectionDefault title="THÔNG TIN KHOÁ HỌC">
      <div className={styles.content}>
        <Image src={src} alt="" />

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.Lorem ipsum dolor sit amet.
        </Paragraph>
      </div>
    </SectionDefault>
  );
};

export default SectionCoursesHero;
