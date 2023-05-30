import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import connectDB from "@/utils/connectDB";
import { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } from '@/model/models'

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                connectDB()
                const { email, password, role } = credentials

                let User;

                switch (role) {
                    case 'superadmin':
                        User = Superadmin;
                        break;
                    case 'campusdirector':
                        User = Campusdirector;
                        break;
                    case 'faculty':
                        User = Faculty;
                        break;
                    case 'dean':
                        User = Dean;
                        break;
                    case 'riuh':
                        User = Riuh;
                        break;
                    case 'eiuh':
                        User = Eiuh;
                        break;
                    default:
                        throw new Error('Invalid role');
                }

                const user = await User.findOne({ email })

                if (!user) {
                    console.log(credentials)
                    throw new Error('Invalid Email or Password12')
                }

                const isPasswordMatched = await bcrypt.compare(password, user.password)

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password2')
                }
                console.log(user)
                return user
            },
        }),
    ],
    pages: {

        signIn: '/',
        signOut: '/'
    },
    callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) {
                console.log("Url1: " + url)

                return url
            }
            console.log(baseUrl)
            return baseUrl
        }
    },
    secret: process.env.NEXTAUTH_SECRET
});