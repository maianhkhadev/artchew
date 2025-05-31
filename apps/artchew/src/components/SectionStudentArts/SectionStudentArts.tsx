'use client';
import { Button, ButtonSize } from 'rebear';
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
        <Button variant="primary" size={ButtonSize.LG}>1</Button>
        <Button variant="secondary" size={ButtonSize.LG}>2</Button>
        <Button variant="secondary" size={ButtonSize.LG}>3</Button>
        <Button variant="secondary" size={ButtonSize.LG}>4</Button>
        <Button variant="secondary" size={ButtonSize.LG}>5</Button>
      </footer>
    </SectionDefault>
  );
};

export default SectionStudentArts;
