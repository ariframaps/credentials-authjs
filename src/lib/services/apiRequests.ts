import "server-only";

import { ApiResponse } from "@/types/apiResponseTypes";
import {
  ForgotPasswordRequestBody,
  ResendVerifyEmailRequestBody,
  ResetPasswordRequestBody,
  SigninRequestBody,
  SignupRequestBody,
  VerifyEmailRequestBody,
} from "@/types/apiRequestBodyTypes";

const API_URL = process.env.API_URL;

export async function signUpRequest(
  form: SignupRequestBody
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
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function signInRequest(
  form: SigninRequestBody
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
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

// VERIFY EMAIL
export async function verifyEmailRequest(
  form: VerifyEmailRequestBody
): Promise<ApiResponse<string>> {
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
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function resendVerifyEmailRequest(
  form: ResendVerifyEmailRequestBody
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
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function forgotPasswordRequest(
  form: ForgotPasswordRequestBody
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
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function resetPasswordRequest(
  form: ResetPasswordRequestBody
): Promise<ApiResponse<string>> {
  try {
    const res = await fetch(`${API_URL}/forgot-password/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, new_password: form.password }),
    });

    const data: ApiResponse<string> = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}
