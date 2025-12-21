import Image from 'next/image';
import { Modal, ModalContent } from 'rebear';
import styles from './BioModal.module.scss';
import src01 from './teacher-1.jpg';
import src02 from './teacher-2.jpg';
import src03 from './teacher-3.jpg';

type BioModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const BioModal = (props: BioModalProps) => {
  const { open, onOpenChange } = props;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      className={styles.modal}
    >
      <ModalContent>
        <Image src={src01} alt="" />
        <p>Họa sĩ Minh Họa Hoàng Người Đá (tên thật Phạm Minh Hoàng), sinh năm 1991, có hơn 10 năm hoạt động Minh Họa & Sáng Tạo trong mảng Truyền Thông & Quảng Cáo, từng hợp tác cùng nhiều nhãn hàng lớn, đảm nhận vai trò giám khảo của nhiều cuộc thi sáng tạo, và dẫn dắt nhiều dự án sáng tạo đạt giải thưởng trong nước lẫn quốc tế.</p>
        <p>Trong số đó có thể kể đến các vai trò:</p>
        <ul>
          <li>Creative Director của dự án Loài Plastic (WeChoice Award 2019).</li>
          <li>Art Director của dự án Triển Lãm “Mở Mắt” – Bệnh viện Mắt Sài Gòn (BSI Award: Best CSR Campaign 2024 và HealthCare Asia 2024: Most Creative HealthCare Campaign).</li>
          <li>Key Artist của dự án Converse Create Together for Tomorrow & Converse City Forest 2020. (Giải Vàng hạng mục Best PR Campaign của giải thưởng ASEAN Exellence PR Award lần thứ 3).</li>
          <li>Motion Designer & Creative của dự án Triển Lãm “Sài Gòn Có Mưa” & “Sài Gòn 3m2”.</li>
          <li>Senior Creative Designer tại VNG Corporation (2013-2020).</li>
        </ul>
        <Image src={src02} alt="" />
        <p>“Hoàng vốn không có xuất phát điểm từ ngành Minh Họa, mà là một Cử Nhân ngành Quan Hệ Công Chúng. Nhưng chính nhờ bước rẽ ngang từ mảng ngành thiên về truyền thông và giao tiếp này, mà Hoàng có góc nhìn khác biệt khi tiếp cận Minh Họa, thứ góp phần tạo nên định hướng chương trình ARTCHEW như hiện tại”.</p>
        <Image src={src03} alt="" />
        <p>“Hoàng tin rằng, cách học Hội Họa nói chung, và Minh Họa nói riêng, cũng hệt như cách chúng ta học một Ngôn Ngữ, không cần thiết phải bí ẩn, khó hiểu hay (như mọi người thường lầm tưởng) là nặng tính “năng khiếu”. Minh Họa cũng có những “Ngữ Pháp, Văn Phạm và Từ Vựng” rõ ràng, khoa học, và hoàn toàn có thể được tiếp cận phổ thông. Sứ mệnh của ARTCHEW không chỉ là mang tới một giáo trình súc tích, dễ hiểu, dễ sử dụng thực tế, mà còn là bệ phóng tinh thần cho những tâm hồn dám thử, dám nghiêm túc, dám thay đổi, như chính Hoàng đã từng”.</p>
      </ModalContent>
    </Modal>
  );
};

export default BioModal;
