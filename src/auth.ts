import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInRequest } from "./lib/services/apiRequests";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        if (!email || !password)
          throw new CredentialsSignin("Please provide both email and password");

        const res = await signInRequest({
          email: email as string,
          password: password as string,
        });

        if (!res.success) {
          throw new Error("Invalid credentials, please try again.");
        }

        const user = {
          id: String(res.data.id ?? 1),
          email: credentials.email as string,
          name: "John Doe",
          image: null,
        } satisfies User;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in/step-1",
  },
});
