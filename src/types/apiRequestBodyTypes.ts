import z from "zod";
import { FormsSchema } from "./formsSchema";

// SIGN UP
const signUpRequestBody = FormsSchema.pick({
  email: true,
  firstname: true,
  lastname: true,
  username: true,
  phone: true,
  password: true,
});
export type SignupRequestBody = z.infer<typeof signUpRequestBody>;

// SIGN IN
const signInRequestBody = FormsSchema.pick({
  email: true,
  password: true,
});
export type SigninRequestBody = z.infer<typeof signInRequestBody>;

// VERIFY EMAIL
const verifyEmailRequestBody = FormsSchema.pick({
  email: true,
  code: true,
});
export type VerifyEmailRequestBody = z.infer<typeof verifyEmailRequestBody>;

// RESEND VERIFICATION MAIL
const resendVerifyEmailRequestBody = FormsSchema.pick({
  email: true,
});
export type ResendVerifyEmailRequestBody = z.infer<
  typeof resendVerifyEmailRequestBody
>;

// FOREGET PASSWORD
const forgotPasswordRequestBody = FormsSchema.pick({
  email: true,
});
export type ForgotPasswordRequestBody = z.infer<
  typeof forgotPasswordRequestBody
>;

// FOREGET PASSWORD
const resetPasswordRequestBody = FormsSchema.pick({
  email: true,
  code: true,
  password: true,
});
export type ResetPasswordRequestBody = z.infer<typeof resetPasswordRequestBody>;
