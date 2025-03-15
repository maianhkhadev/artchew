import { Title } from 'rebear';

type CourseNameProps = {
  id: string;
};

export function CourseName(props: CourseNameProps) {
  const { id } = props;

  if (id === '3') {
    return <Title level={6}>Lớp học trực tiếp</Title>;
  }

  if (id === '2') {
    return <Title level={6}>Lớp online google meet</Title>;
  }

  return <Title level={6}>Bộ video tự học</Title>;
}

export default CourseName;
