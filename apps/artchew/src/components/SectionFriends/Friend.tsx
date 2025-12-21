'use client';
import { useState } from 'react';
import { Title } from 'rebear';
import { ModalFriendDetails } from './ModalFriendDetails';
import styles from './Friend.module.scss';

type FriendProps = {
  id: number;
  avatarUrl: string;
  name: string;
  details: string;
};

export const Friend = (props: FriendProps) => {
  const { avatarUrl, details } = props;
  const [open, onOpenChange] = useState(false);

  const handleShow = () => {
    onOpenChange(true);
  }

  return (
    <>
      <div className={styles.friend} onClick={handleShow}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
      </div>

      <ModalFriendDetails
        open={open}
        onOpenChange={onOpenChange}
        content={details}
      />
    </>
  );
};

export default Friend;
