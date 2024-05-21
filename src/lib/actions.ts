'use server';
import { signIn, signOut } from '../services/auth';

export const socialLogin = async (formData: any) => {
    const action = formData.get('action');
    await signIn(action, { redirectTo: '/' });
};

export const socialLogout = async () => {
    sessionStorage.removeItem('provider_token');
    await signOut({ redirectTo: '/' });
};