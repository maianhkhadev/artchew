import { Title } from 'rebear';

type CourseNameProps = {
  courseId: string;
};

export function CourseName(props: CourseNameProps) {
  const { courseId } = props;

  if (courseId === '3') {
    return <Title level={6}>Lớp học trực tiếp</Title>;
  }

  if (courseId === '2') {
    return <Title level={6}>Lớp online google meet</Title>;
  }

  return <Title level={6}>Bộ video tự học</Title>;
}

export default CourseName;
