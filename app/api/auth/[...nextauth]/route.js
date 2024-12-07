import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.local.GOOGLE_CLIENT_ID,
            clientSecret: process.env.local.GOOGLE_CLIENT_SECRET,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
