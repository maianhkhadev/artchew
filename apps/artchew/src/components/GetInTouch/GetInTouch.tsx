'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Modal,
  ModalContent,
  Title,
  Form,
  FormItem,
  Input,
  Select,
  Button,
} from 'rebear';
import styles from './GetInTouch.module.scss';
import src from './cta.svg';

export const GetInTouch = () => {
  const [open, onOpenChange] = useState(false);

  const handleShow = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onOpenChange(true);
  };

  const handleSubmit = (values: unknown) => {
    const formData = values as never;
    console.log(formData);
  };

  return (
    <>
      <a className={styles.cta} href="#" onClick={handleShow}>
        <Image src={src} alt="artchew" />
      </a>

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalContent>
          <div className={styles.modalContent}>
            <Title level={3}>Đăng Kí</Title>
            <br />
            <br />
            <Form defaultValues={{}} onSubmit={handleSubmit}>
              <FormItem
                name="fullname"
                label="Họ và tên"
                rules={{ required: true }}
                element={<Input />}
              />

              <FormItem
                name="email"
                label="Mail đăng nhập"
                rules={{ required: true }}
                element={<Input />}
              />

              <FormItem
                name="phone"
                label="Số điện thoại"
                rules={{ required: true }}
                element={<Input />}
              />

              <FormItem
                name="courseId"
                label="Phương thức học"
                rules={{ required: true }}
                element={
                  <Select
                    options={[
                      { value: '1', label: 'Bộ video tự học' },
                      { value: '2', label: 'Lớp online google meet' },
                      { value: '3', label: 'Lớp học trực tiếp' },
                    ]}
                  />
                }
              />

              <FormItem
                name="time"
                label="Suất học đăng ký"
                rules={{ required: true }}
                element={<Input />}
              />

              <Button variant="secondary" size="2xl">
                Gửi
              </Button>
            </Form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GetInTouch;
