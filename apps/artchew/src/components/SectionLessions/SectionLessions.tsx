import { SectionDefault } from '../SectionDefault';
import { Lession } from '../Lession';
import styles from './SectionLessions.module.scss';

import lessions from './lessions.json'

type SectionLessionsProps = {
  title: string;
}

export const SectionLessions = (props: SectionLessionsProps) => {
  const { title } = props;

  return (
    <SectionDefault title={title}>
      <div className={styles.items}>
        {lessions.map((lession) => (
          <Lession key={lession.id} {...lession} />
        ))}
      </div>
    </SectionDefault>
  );
}

export default SectionLessions;