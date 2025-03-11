import { useState } from 'react';
import {
  ButtonIcon,
  ConfirmationModal,
  ModalTitle,
  ModalContent,
  Title,
} from 'rebear';
import { IconTrash01 } from 'rebear-icons';
import { useStudent, useDeleteStudent } from '@artchew/data-access-students';
import styles from './ButtonDeleteStudent.module.scss';

type ButtonDeleteStudentProps = {
  id: string;
};

export function ButtonDeleteStudent(props: ButtonDeleteStudentProps) {
  const { id } = props;
  const [open, onOpenChange] = useState(false);
  const { isPending, data: student } = useStudent(id);
  const { mutate } = useDeleteStudent(id);

  const handleShow = () => {
    onOpenChange(true);
  };

  const handleConfirm = () => {
    mutate();
  };

  return (
    <>
      <ButtonIcon
        variant="secondary"
        icon={<IconTrash01 />}
        error
        onClick={handleShow}
      />

      <ConfirmationModal
        open={open}
        onOpenChange={onOpenChange}
        onConfirm={handleConfirm}
      >
        <ModalTitle>
          <Title level={5}>Edit student {student?.name}</Title>
        </ModalTitle>
        <ModalContent>Do you want to delete this student date?</ModalContent>
      </ConfirmationModal>
    </>
  );
}

export default ButtonDeleteStudent;
