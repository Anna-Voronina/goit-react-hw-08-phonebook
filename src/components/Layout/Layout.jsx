import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
