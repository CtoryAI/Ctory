import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}; 