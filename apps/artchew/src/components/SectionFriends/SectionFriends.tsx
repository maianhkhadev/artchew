import { SectionDefault } from '../SectionDefault';
import { Friend } from './Friend';
import { useFriends } from '@artchew/data-access-students';
import styles from './SectionFriends.module.scss';

type SectionFriendsProps = {
  title: string;
};

export const SectionFriends = (props: SectionFriendsProps) => {
  const { title } = props;
  const { data: friends = [] } = useFriends();

  return (
    <SectionDefault title={title}>
      <div className={styles.items}>
        {friends.map((friend) => (
          <Friend key={friend.name} {...friend} />
        ))}
      </div>
    </SectionDefault>
  );
};

export default SectionFriends;
