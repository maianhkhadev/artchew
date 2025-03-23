export const useLessions = () => {
  return {
    data: [
      {
        id: 1,
        thumbnailUrl: 'images/thumbnail-videos/thumbnail_01.jpeg',
        courses: ['1', '2', '3'],
        title: 'Bài 01',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....',
      },
      {
        id: 2,
        thumbnailUrl: 'images/thumbnail-videos/thumbnail_01.jpeg',
        courses: [],
        title: 'Bài 02',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus....',
      },
    ],
  };
};

export default useLessions;
