import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Other = () => {
  return (
    <div>
      <div style={{ padding: 8 }}>
        <Link to={'..'}>To Index</Link>
      </div>
      <Outlet />
    </div>
  );
}
