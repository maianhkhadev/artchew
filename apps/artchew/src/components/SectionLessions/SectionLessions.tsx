import { SectionDefault } from '../SectionDefault';
import { Lession } from '../Lession';
import { useLessions } from '@artchew/data-access-lessions';
import styles from './SectionLessions.module.scss';

type SectionLessionsProps = {
  title: string;
}

export const SectionLessions = (props: SectionLessionsProps) => {
  const { title } = props;
  const { data = [] } = useLessions()

  return (
    <SectionDefault title={title}>
      <div className={styles.items}>
        {data.map((item) => (
          <Lession key={item.id} {...item} />
        ))}
      </div>
    </SectionDefault>
  );
}

export default SectionLessions;