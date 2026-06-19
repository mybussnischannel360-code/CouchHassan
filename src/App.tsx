import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Beginner from './pages/levels/Beginner';
import Intermediate from './pages/levels/Intermediate';
import Advanced from './pages/levels/Advanced';
import Elite from './pages/levels/Elite';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="beginner" element={<Beginner />} />
            <Route path="intermediate" element={<Intermediate />} />
            <Route path="advanced" element={<Advanced />} />
            <Route path="elite" element={<Elite />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
