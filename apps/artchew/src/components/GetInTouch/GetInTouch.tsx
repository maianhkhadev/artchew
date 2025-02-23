'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Modal,
  ModalContent,
  Display,
  Form,
  FormItem,
  Input,
  Password,
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

      <Modal className={styles.modal} open={open} onOpenChange={onOpenChange}>
        <ModalContent>
          <div className={styles.modalContent}>
            <Display className={styles.title}>Đăng Kí</Display>
            <br />
            <br />
            <br />
            <Form onSubmit={handleSubmit}>
              <FormItem
                name="fullname"
                label="Họ và tên"
                rules={{ required: true }}
              >
                <Input />
              </FormItem>

              <FormItem
                name="email"
                label="Mail đăng nhập"
                rules={{ required: true }}
              >
                <Input />
              </FormItem>

              <FormItem
                name="phone"
                label="Số điện thoại"
                rules={{ required: true }}
              >
                <Input />
              </FormItem>

              <FormItem
                name="service"
                label="Phương thức học"
                rules={{ required: true }}
              >
                <Password />
              </FormItem>

              <FormItem
                name="time"
                label="Suất học đăng ký"
                rules={{ required: true }}
              >
                <Password />
              </FormItem>

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
