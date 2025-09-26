import { z } from "zod";

export const FormsSchema = z.object({
  email: z.email("Invalid email format"),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^\S+$/, "Username cannot contain spaces"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .transform((val) => val.replace(/[\s()-]/g, "")) // remove spaces, () and -
    .transform((val) => (val.startsWith("0") ? val.slice(1) : val)) // remove leading 0
    .refine((val) => /^\d+$/.test(val), {
      message: "Invalid phone number format",
    })
    .refine((val) => val.length >= 7 && val.length <= 15, {
      message: "Phone number must be 7–15 digits",
    }),

  countryCode: z.string().min(1, "Country code is required"),

  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number"),

  confirmPassword: z.string().min(1, "Please confirm your password"),
  code: z.string().min(1, "Code must be filled"),
});

export type FormsForm = z.infer<typeof FormsSchema>;
