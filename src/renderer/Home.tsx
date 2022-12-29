import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>home</p>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">login</Link>
    </div>
  );
}
