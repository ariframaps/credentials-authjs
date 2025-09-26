import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        id: {},
      },
      authorize: async (credentials) => {
        const { email, id } = credentials;
        let user = null;

        user = {
          id: String(id),
          email: email as string,
          name: "John Doe",
          image: null,
        };

        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in/step-1",
  },
});
