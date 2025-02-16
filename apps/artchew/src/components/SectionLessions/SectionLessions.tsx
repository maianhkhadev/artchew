import { DefaultSection } from '../DefaultSection';
import { Lession } from '../Lession';
import styles from './SectionLessions.module.scss';

import lessions from './lessions.json'

type SectionLessionsProps = {
  title: string;
}

export const SectionLessions = (props: SectionLessionsProps) => {
  const { title } = props;

  return (
    <DefaultSection title={title}>
      <div className={styles.items}>
        {lessions.map((lession) => (
          <Lession key={lession.id} {...lession} />
        ))}
      </div>
    </DefaultSection>
  );
}

export default SectionLessions;