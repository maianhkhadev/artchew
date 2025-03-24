'use client';
import Image from 'next/image';
import { Title, Paragraph } from 'rebear';
import styles from './Introduce.module.scss';
import src from './QR.svg';

export const Introduce = () => {
  return (
    <div className={styles.modalContent}>
      <Title level={3}>Mã QR thanh toán</Title>
      <br />
      <div>
      <Image src={src} alt="" />
      </div>
      <br />
      <Title level={3}>Lưu ý thanh toán</Title>
      <Paragraph>
        Chào mừng bạn đến với lớp học Artchew! Để đăng ký khoá học, vui lòng làm
        theo các bước hướng dẫn sau đây:
      </Paragraph>
      <br />
      <Title level={6}>Bước 1</Title>
      <Paragraph>
        Chuyển khoản học phí vào tài khoản sau:
        <ul>
          <li>STK: 106005534828</li>
          <li>Ngân hàng: Vietinbank</li>
          <li>Chủ tài khoản: Phạm Mình Hoàng</li>
          <li>
            Nội dung chuyển khoản: Tên học viên - Số điện thoại - Khoá học đăng
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
      <br/>
      <Title level={6}>Lưu ý</Title>
      <Paragraph>
        <strong>* Nếu sau 24 giờ bạn chưa nhận được email, vui lòng liên hệ qua Fanpage để được hỗ trợ nhanh chóng.</strong>
      </Paragraph>
      <Paragraph>
        <strong>* Học phí sẽ không được hoàn lại trong mọi trường hợp. Bạn vui lòng cân nhắc kỹ trước khi đăng ký khoá học.</strong>
      </Paragraph>
      <br/>
      <Paragraph>
        Chúc bạn học tốt và có những trải nghiệm tuyệt vời tại Artchew!
      </Paragraph>
    </div>
  );
};

export default Introduce;
