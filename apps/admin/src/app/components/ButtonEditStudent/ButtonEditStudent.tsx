import { useState } from 'react';
import { ButtonIcon, Modal, ModalTitle, ModalContent, Title } from 'rebear';
import { IconEdit01 } from 'rebear-icons';
import { useStudent } from '@artchew/data-access-students';
import styles from './ButtonEditStudent.module.scss';

type ButtonEditStudentProps = {
  id: string;
}

export function ButtonEditStudent(props: ButtonEditStudentProps) {
  const { id } = props;
  const [open, onOpenChange] = useState(false);
  const { isPending, data: student } = useStudent(id);

  const handleShow = () => {
    onOpenChange(true);
  };

  return (
    <>
      <ButtonIcon
        variant="secondary"
        icon={<IconEdit01 />}
        onClick={handleShow}
      />

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalTitle>
          <Title level={5}>Edit student {student?.name}</Title>
        </ModalTitle>
        <ModalContent>
          Edit student here
        </ModalContent>
      </Modal>
    </>
  );
}

export default ButtonEditStudent;
