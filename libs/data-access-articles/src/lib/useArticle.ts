export const useArticle = (id: string) => {
  if (id === '1') {
    return {
      data: {
        title: 'Phối cảnh',
        content:
          'Hình dáng của một vật thể, hoặc một khung cảnh, có thể hoàn toàn bị thay đổi tùy thuộc vào góc nhìn.<br /><br />Khác với thế giới 3 chiều mà chúng ta đang sống, thế giới trên mặt giấy, hoặc bàn vẽ chỉ có 2 chiều. Việc thiếu đi một chiều không gian sẽ làm chúng ta cảm thấy khó khăn khi cần mô tả đúng chiều sâu, hướng xoay, và tỉ lệ của vật thể.<br /><br />Phối cảnh là học phần giúp chúng ta tìm ra chiều sâu còn thiếu đó, giải quyết những vấn đề thị giác liên quan đến góc nhìn, và bổ trợ trực tiếp cho học phần Dựng Hình.',
        images: [
          '/images/articles/article-01-1.jpg',
          '/images/articles/article-01-2.jpg',
          '/images/articles/article-01-3.jpg',
          '/images/articles/article-01-4.jpg',
        ],
      },
    };
  }

  if (id === '2') {
    return {
      data: {
        title: 'Dựng hình',
        content:
          'Sau khi đã có khái niệm về không gian qua bài phối cảnh. Chúng ta sẽ học cách mô phỏng các vật thể xung quanh vào không gian đã học. Hiểu rõ và thể hiện được các biểu hiện “xiên vẹo” của vật thể khi bị ảnh hưởng bởi góc nhìn. Học cách đơn giản hóa vật thể thành các khối căn bản (Hộp, Cầu, Trụ, Chóp) để dễ mô tả hơn, giữ vật thể đúng tỉ lệ, hạn chế xô lệch so với thực tế. Và quan trọng nhất, là tư duy về kết cấu vật thể, thông qua hệ thống Countour Lines, thứ không thể thiếu khi tiếp cận kiến thức về Ánh Sáng ở học phần sau.',
        images: [
          '/images/articles/article-02-1.jpg',
          '/images/articles/article-02-2.jpg',
          '/images/articles/article-02-3.jpg',
          '/images/articles/article-03-4.jpg',
        ],
      },
    };
  }

  if (id === '3') {
    return {
      data: {
        title: 'Ánh sáng',
        content:
          'Học phần này tập trung vào việc phân tích kết cấu nhận sáng của vật thể, cách phân bổ các cường độ sáng lên kết cấu đó, và giới thiệu sơ bộ về các kỹ thuật đánh dấu cường độ ánh sáng khác nhau. Sau khi nắm vững về kết cấu nhận sáng, học viên sẽ được tiếp cận kỹ thuật tả sáng đặc thù của Flat Art: Flat Shading. Cuối cùng, là cách phân bố và kiểm soát ánh sáng tổng thể giữa các lớp xa gần của tranh.',
        images: [
          '/images/articles/article-03-1.jpg',
          '/images/articles/article-03-2.jpg',
          '/images/articles/article-03-3.jpg',
          '/images/articles/article-03-4.jpg',
        ],
      },
    };
  }

  if (id === '4') {
    return {
      data: {
        title: 'Kỹ thuật đi Nét (Line art)',
        content:
          'Đối với Flat Art, bản đi nét (Line Art) chính là một trong những bước hoàn thiện đầu tiên của tranh. Có thể hiểu nôm na đây chính là bài Dựng Hình, nhưng phiên bản chỉn chu và rõ ràng hơn. Học viên sẽ được hướng dẫn các kỹ thuật với Dynamic-Line và Monoline tùy theo phong cách và sở thích, các thủ thuật giúp phân bổ line tự nhiên, tạo khối và texture cho chi tiết, lựa chọn và tùy chỉnh cọ phù hợp cho nhu cầu sử dụng.',
        images: [
          '/images/articles/article-04-1.jpg',
          '/images/articles/article-04-2.jpg',
          '/images/articles/article-04-3.jpg',
          '/images/articles/article-04-4.jpg',
        ],
      },
    };
  }

  if (id === '5') {
    return {
      data: {
        title: 'Cơ thể người',
        content:
          'Học cách sử dụng Body Puppet - một phiên bản cơ thể người được đơn giản hóa thành các khối hộp, trụ căn bản - để nghiên cứu và mô phỏng Posing người thật.<br /><br />Nắm chắc tỉ lệ các chi tiết lớn trên cơ thể (Đầu, Thân, Tay, Chân, Ngũ Quan) và cách điều hướng những chi tiết này trong không gian.<br /><br />Học phần này sẽ có 2 phần: Thân (Body Puppet) và Đầu (Loomis).',
        images: [
          '/images/articles/article-05-1.jpg',
          '/images/articles/article-05-2.jpg',
          '/images/articles/article-05-3.jpg',
          '/images/articles/article-05-4.jpg',
        ],
      },
    };
  }

  if (id === '6') {
    return {
      data: {
        title: 'Cách điệu',
        content:
          'Gần giống với cách học của bài Anatomy, học phần này sẽ tập trung phân tích các cấu trúc cách điệu & phương pháp sáng tạo phương án cách điệu.<br /><br />Học phần này sẽ ứng dụng rất tốt cho quá trình thiết kế Mascot thương hiệu, Sáng tác nhân vật, Set up bộ stickers cho App, Social Media Platform, POSM.',
        images: [
          '/images/articles/article-06-1.jpg',
          '/images/articles/article-06-2.jpg',
          '/images/articles/article-06-3.jpg',
          '/images/articles/article-06-4.jpg',
        ],
      },
    };
  }

  if (id === '7') {
    return {
      data: {
        title: 'Quy trình lên màu',
        content:
          'Cách sắp xếp file làm việc để dễ dàng chỉnh sửa và thử nghiệm các phương án màu sắc. Hiểu về sự thay đổi của màu sắc khi chịu ảnh hưởng của các nguồn sáng trong môi trường.<br /><br />Nắm và hiểu rõ các thuật ngữ khi nói về màu sắc.<br /><br />Cách hiểu và ứng dụng các công thức màu sắc.',
        images: [
          '/images/articles/article-07-1.jpg',
          '/images/articles/article-07-2.jpg',
          '/images/articles/article-07-3.jpg',
          '/images/articles/article-07-4.jpg',
        ],
      },
    };
  }

  if (id === '8') {
    return {
      data: {
        title: 'Layout & Composition',
        content:
          'Sẽ rất khó để có thể dịch sát nghĩa được Composition ra tiếng Việt, nhất là khi mỗi mảng xử lý hình ảnh sẽ có cách hiểu và sử dụng Composition khác nhau. Thế nên trong chương trình Nền Tảng Minh Họa này, tụi mình sẽ gọi tên nó theo chức năng mà nó đảm nhận: Kiểm Soát Tổng Thể các yếu tố trong tranh.<br /><br />Học phần này có thể coi là sự tổng hợp của cả 7 học phần trên, để xử lý các vấn đề của một bức artwork hoàn thiện:<br />- Mình sẽ chọn góc nhìn nào, để tả ý đồ gì.<br />- Quy tắc phân bố các yếu tố chính phụ.<br />- Kiểm soát độ tập trung, hướng nhìn của artwork.<br />- Cân đo sự tương phản của các yếu tố từ Kích Cỡ, Ánh Sáng, Màu Sắc, Mật Độ Chi Tiết tới Hiệu Ứng trong artwork.',
        images: [
          '/images/articles/article-08-1.jpg',
          '/images/articles/article-08-2.jpg',
          '/images/articles/article-08-3.jpg',
          '/images/articles/article-08-4.jpg',
        ],
      },
    };
  }

  return { data: null };
};

export default useArticle;
