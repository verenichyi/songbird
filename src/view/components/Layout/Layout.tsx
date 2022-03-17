import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => (
  <div className={'container'}>
    <header>header</header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
