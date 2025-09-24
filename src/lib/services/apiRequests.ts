import { ApiResponse } from "@/types/apiResponseTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signUpRequest(form: any): Promise<ApiResponse<string>> {
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
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function signInRequest(
  form: any
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
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function verifyEmailRequest(
  form: any
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
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function resendVerifyEmailRequest(
  form: any
): Promise<ApiResponse<string>> {
  try {
    console.log(API_URL);
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
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function forgotPasswordRequest(
  form: any
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
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function resetPasswordRequest(
  form: any
): Promise<ApiResponse<string>> {
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
  } catch (error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}
