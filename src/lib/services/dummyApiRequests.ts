import { ApiErrorResponse } from "@/types/apiResponseTypes";
import { LatestBooking, Reservation, User } from "@/types/dummyTypes";

const HOST_URL = process.env.HOST_URL;

export async function getOverviewRequest(): Promise<
  Reservation | ApiErrorResponse
> {
  try {
    const res = await fetch(`${HOST_URL}/api/reservation/overview`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: Reservation = await res.json();
    return data;
  } catch (error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function getLatestRequest(): Promise<
  LatestBooking | ApiErrorResponse
> {
  try {
    const res = await fetch(`${HOST_URL}/api/reservation/latest-booking`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: LatestBooking = await res.json();
    return data;
  } catch (error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}

export async function getUserInfoRequest(): Promise<User | ApiErrorResponse> {
  try {
    const res = await fetch(`${HOST_URL}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: User = await res.json();
    return data;
  } catch (error) {
    return {
      errors: "Something went wrong. Please try again later.",
      success: false,
      status_code: 500,
    };
  }
}
