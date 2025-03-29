import { ReactNode } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { APP_CONFIG } from '@/core/config';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isAuthenticated, disconnect } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    disconnect();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary-600 text-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            {APP_CONFIG.APP_NAME}
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-primary-200">Home</Link>
            <Link to="/components" className="hover:text-primary-200">Components</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-primary-200">Dashboard</Link>
                <button onClick={handleLogout} className="hover:text-primary-200">Sign Out</button>
              </>
            ) : (
              <Link to="/login" className="hover:text-primary-200">Sign In</Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children || <Outlet />}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">{APP_CONFIG.APP_NAME}</h2>
              <p className="mt-2 text-gray-400">{APP_CONFIG.APP_DESCRIPTION}</p>
            </div>
            <div className="flex space-x-6">
              <a href={APP_CONFIG.SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href={APP_CONFIG.SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href={APP_CONFIG.SOCIAL_LINKS.WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Website
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {APP_CONFIG.APP_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 