import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Dashboard from './Dashboard';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
