import { Navigate } from 'react-router-dom';

export default function AdminGuard({ children }){
    const token = localStorage.getItem('sl_token');

    if (!token) {
        return <Navigate to="/" replace />
    }

    return children;
}
