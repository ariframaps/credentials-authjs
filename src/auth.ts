import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        id: {},
        username: {},
      },
      authorize: async (credentials) => {
        const { email, id, username } = credentials;
        let user = null;

        user = {
          id: String(id),
          email: email as string,
          name: username as string,
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

// const user = {
//   id: "miaw",
//   email: "miaw@mail.com",
//   name: "ariframa",
//   image: null,
// };
