import { ApiResponse } from "@/types/apiResponseTypes";
import { FormsSchema } from "@/types/formsSchema";
import z from "zod";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// SIGN UP
export const signUpRequestBody = FormsSchema.pick({
  email: true,
  firstname: true,
  lastname: true,
  username: true,
  phone: true,
  password: true,
});
export async function signUpRequest(
  form: z.infer<typeof signUpRequestBody>
): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

// SIGN IN
export const signInRequestBody = FormsSchema.pick({
  email: true,
  password: true,
});
export async function signInRequest(
  form: z.infer<typeof signInRequestBody>
): Promise<ApiResponse<{ id: number; email: string; token: string }>> {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<{ id: number; email: string; token: string }> =
      await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

// VERIFY EMAIL
export async function verifyEmailRequest(form: {
  email: string;
  code: string;
}): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/email-verification/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

// RESEND VERIFICATION MAIL
export const resendVerifyEmailRequestBody = FormsSchema.pick({
  email: true,
});
export async function resendVerifyEmailRequest(
  form: z.infer<typeof resendVerifyEmailRequestBody>
): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/email-verification/resend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

// FOREGET PASSWORD
export const forgotPasswordRequestBody = FormsSchema.pick({
  email: true,
});
export async function forgotPasswordRequest(
  form: z.infer<typeof forgotPasswordRequestBody>
): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/forgot-password/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function resetPasswordRequest(form: {
  email: string;
  code: string;
  new_password: string;
}): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/forgot-password/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (_error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}
