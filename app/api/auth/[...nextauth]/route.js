import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/Models/user.model';
import { connectDb } from '@/Database/db';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:'574633470602-43suhcptef80ml2qj458hdnjluta773g.apps.googleusercontent.com',
      clientSecret:'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',
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectDb();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }