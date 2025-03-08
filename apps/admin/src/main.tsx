import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PrivateRoute } from './app/PrivateRoute';
import { Welcome } from './app/pages/Welcome';
import { StudentList } from './app/pages/Students/List';
import { StudentEdit } from './app/pages/Students/Edit';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />

          <Route element={<PrivateRoute />}>
            <Route path="students" element={<StudentList />} />
            <Route path="student/:id" element={<StudentEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
