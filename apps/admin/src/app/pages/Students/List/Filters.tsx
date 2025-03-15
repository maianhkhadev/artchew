import { useNavigate, useSearchParams } from 'react-router-dom';
import { Select, SelectOption, Input } from 'rebear';
import styles from './Filters.module.scss';

export function Filters() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const status = searchParams.get('status') ?? 'all';

  return (
    <div className={styles.filters}>
      <Input
        value={keyword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          searchParams.set('keyword', value.toString());
          searchParams.delete('status');
          navigate(`/students?${searchParams.toString()}`);
        }}
      />
      <Select
        value={status}
        options={[
          { value: 'all', label: 'All' },
          { value: 'registered', label: 'Registered' },
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ]}
        onChange={(value) => {
          searchParams.set('status', value.toString());
          navigate(`/students?${searchParams.toString()}`);
        }}
      />
    </div>
  );
}

export default Filters;
