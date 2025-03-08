import { useState } from 'react';
import { Button, Modal, ModalTitle, ModalContent, Title } from 'rebear';
import { IconPlus } from 'rebear-icons';
import { useCreateStudent } from '@artchew/data-access-students';
import { FormStudent } from '../FormStudent';
import styles from './ButtonCreateStudent.module.scss';

export function ButtonCreateStudent() {
  const [open, onOpenChange] = useState(false);
  const { isPending, mutate } = useCreateStudent();

  const handleShow = () => {
    onOpenChange(true);
  };

  const handleSubmit = (values: any) => {
    mutate(values);
  };

  return (
    <>
      <Button variant="primary" prefixIcon={<IconPlus />} onClick={handleShow}>
        Create
      </Button>

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalTitle>
          <Title level={5}>Add a student</Title>
        </ModalTitle>
        <ModalContent>
          <FormStudent isLoading={isPending} onSubmit={handleSubmit} />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ButtonCreateStudent;
