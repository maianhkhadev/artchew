'use client';
import { useState, useEffect } from 'react';
import { ButtonIcon, ButtonSize } from 'rebear';
import { IconChevronLeft, IconChevronRight } from 'rebear-icons';
import { SectionDefault } from '../SectionDefault';
import { StudentArt } from '../StudentArt';
import styles from './SectionStudentArts.module.scss';
import arts from './arts.json';

export const SectionStudentArts = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const maxIndex = Math.max(arts.length - visible, 0);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <SectionDefault title="Sản phẩm">
      <div className={styles.sliderWindow}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateX(-${(100 / visible) * current}%)`,
          }}
        >
          {arts.map((art) => (
            <div key={art.id} className={styles.sliderItem}>
              <StudentArt {...art} />
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <ButtonIcon
          className={styles.buttonLeft}
          variant="primary"
          size={ButtonSize.XL2}
          icon={<IconChevronLeft />}
          onClick={prev}
        />
        <ButtonIcon
          className={styles.buttonRight}
          variant="primary"
          size={ButtonSize.XL2}
          icon={<IconChevronRight />}
          onClick={next}
        />
      </footer>
    </SectionDefault>
  );
};

export default SectionStudentArts;
