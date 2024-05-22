import NextAuth, { NextAuthConfig } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

const authOptions: NextAuthConfig = {
    providers: [
        AzureADProvider({
            clientId: process.env.NEXT_PUBLIC_NEXTAUTH_AZURE_AD_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_NEXTAUTH_AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.NEXT_PUBLIC_NEXTAUTH_AZURE_AD_TENANT_ID,
            authorization: {
                params: { scope: 'openid email profile User.Read  offline_access' }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        }
    }
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth(authOptions);