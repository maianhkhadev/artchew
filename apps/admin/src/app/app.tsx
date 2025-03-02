import { Routes, Route } from 'react-router';
import { PrivateRoute } from './PrivateRoute';
import { Welcome } from './pages/Welcome';
import { StudentList } from './pages/Students/List';
import { StudentEdit } from './pages/Students/Edit';

export function App() {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route element={<PrivateRoute />}>
        <Route path="students" element={<StudentList />} />
        <Route path="student/:id" element={<StudentEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
