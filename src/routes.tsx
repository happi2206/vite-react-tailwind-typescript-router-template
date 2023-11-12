import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    loader: () => <>loader...</>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
