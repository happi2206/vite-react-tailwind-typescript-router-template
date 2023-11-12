import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <h1>Vite + React + Tailwind + Router</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
