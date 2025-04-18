import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AppLayout from '../components/layout/AppLayout';
import LoginPage from '../components/auth/LoginPage';
import Dashboard from '../components/dashboard/Dashboard';
import DigitalAgencyLanding from '../components/pages/Landing';
import NotFound from '../components/pages/NotFound';

// Example protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { login } = useAuth();
  const handleLogin = () => {
    login('demo@example.com', 'password');
  };
  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/" element={<DigitalAgencyLanding />} />
      
      <Route path="/o" element={
        <ProtectedRoute>
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </ProtectedRoute>
      } />
      
      {/* Add more routes as needed */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;