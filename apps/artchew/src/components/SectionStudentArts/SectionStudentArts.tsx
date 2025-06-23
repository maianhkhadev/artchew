'use client';
import { ButtonIcon, ButtonSize } from 'rebear';
import { IconChevronLeft, IconChevronRight } from 'rebear-icons';
import { SectionDefault } from '../SectionDefault';
import { StudentArt } from '../StudentArt';
import styles from './SectionStudentArts.module.scss';
import arts from './arts.json';

export const SectionStudentArts = () => {
  return (
    <SectionDefault title="Sản phẩm">
      <div className={styles.items}>
        {arts.map((art) => (
          <StudentArt key={art.id} {...art} />
        ))}
      </div>

      <footer className={styles.footer}>
        <ButtonIcon
          className={styles.buttonLeft}
          variant="primary"
          size={ButtonSize.XL2}
          icon={<IconChevronLeft />}
        />
        <ButtonIcon
          className={styles.buttonRight}
          variant="primary"
          size={ButtonSize.XL2}
          icon={<IconChevronRight />}
        />
      </footer>
    </SectionDefault>
  );
};

export default SectionStudentArts;
