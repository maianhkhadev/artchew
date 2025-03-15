import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Welcome } from './pages/Welcome';
import { StudentList } from './pages/Students/List';

export function App() {
  return (
    <Routes>
      <Route path="" Component={Welcome} />

      <Route path="students" Component={StudentList} />
    </Routes>
  );
}

export default App;
