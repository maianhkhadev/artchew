'use client';
import { useState } from 'react';
import { Title, Paragraph } from 'rebear';
import src from './QR.svg';

export const QRcode = () => {
  return (
    <div>
      <Title level={3}>Mã QR thanh toán</Title>
      <img src={src} alt="" />
      <Title level={3}>Lưu ý thanh toán</Title>
      <Paragraph>
        Chào mừng bạn đến với lớp học Artchew! Để đăng ký khoá học, vui lòng làm
        theo các bước hướng dẫn sau đây:
      </Paragraph>
      <Title level={6}>Bước 1</Title>
      <Paragraph>
        Chuyển khoản học phí vào tài khoản sau:
        <ul>
          <li>STK: 106005534828</li>
          <li>Ngân hàng: Vietinbank</li>
          <li>Chủ tài khoản: Phạm Mình Hoàng</li>
          <li>
            Nôi dung chuyển khoản: Tên học viên - Số điện thoại - Khoá học đăng
            ký (Ví dụ: MinhHoang 0981234567 online toi15)
          </li>
        </ul>
      </Paragraph>
      <Title level={6}>Bước 2</Title>
      <Paragraph>
        Chụp lại màn hình chuyển khoản và gửi qua Fanpage để Artchew xac nhận
        thông tin đăng ký cho bạn nhé!
      </Paragraph>
      <Title level={6}>Bước 3</Title>
      <Paragraph>
        Sau khi xác nhận thành công, thông tin tài khoản học viên sẽ được gửi
        đến địa chỉ email bạn đã cung cấp trong vòng 24h giờ.
      </Paragraph>
    </div>
  );
};

export default QRcode;
