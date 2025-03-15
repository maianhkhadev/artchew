import { useState } from 'react';
import { ButtonIcon, Modal, ModalTitle, ModalContent, Title } from 'rebear';
import { IconEdit01 } from 'rebear-icons';
import {
  Student,
  useStudent,
  useEditStudent,
} from '@artchew/data-access-students';
import { FormStudent } from '../FormStudent';
import styles from './ButtonEditStudent.module.scss';

type ButtonEditStudentProps = {
  id: string;
  data: Student;
};

export function ButtonEditStudent(props: ButtonEditStudentProps) {
  const { id, data } = props;
  const [open, onOpenChange] = useState(false);
  const { isPending, data: student } = useStudent(id);
  const { mutate } = useEditStudent(id);

  const handleShow = () => {
    onOpenChange(true);
  };

  const handleSubmit = (values: any) => {
    mutate(values, {
      onSuccess: () => {
        onOpenChange(false);
      },
    });
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
          <FormStudent
            isLoading={isPending}
            data={data}
            onSubmit={handleSubmit}
          />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ButtonEditStudent;
