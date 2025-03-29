import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setUser, setLoading, setError, clearAuth } from '@/store/slices/authSlice';
import { getProvider, getSigner } from '@/utils/web3';
import { User } from '@/types/core';
import apiClient from '@/api/client';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state: RootState) => state.auth);

    const connect = useCallback(async () => {
        try {
            dispatch(setLoading(true));
            const provider = getProvider();
            if (!provider) throw new Error('No provider found');

            const accounts = await provider.send('eth_requestAccounts', []);
            if (!accounts[0]) throw new Error('No account found');

            const response = await apiClient.post<{ user: User, token: string }>('/auth/login', {
                address: accounts[0],
            });

            localStorage.setItem('token', response.data.token);
            dispatch(setUser(response.data.user));
        } catch (err: any) {
            dispatch(setError(err.message));
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch]);

    const disconnect = useCallback(() => {
        localStorage.removeItem('token');
        dispatch(clearAuth());
    }, [dispatch]);

    return {
        user,
        loading,
        error,
        connect,
        disconnect,
        isAuthenticated: !!user,
    };
}; 