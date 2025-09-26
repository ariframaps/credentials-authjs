import { ApiResponse } from "@/types/apiResponseTypes";
import { LatestBooking, Reservation } from "@/types/dummyTypes";
import { User } from "next-auth";

const HOST = process.env.NEXT_PUBLIC_HOST_URL;

export async function getOverviewRequest(): Promise<
  ApiResponse<Reservation[]>
> {
  try {
    const res = await fetch(`${HOST}/api/reservation/overview`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: ApiResponse<Reservation[]> = await res.json();
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

export async function getLatestRequest(): Promise<
  ApiResponse<LatestBooking[]>
> {
  try {
    const res = await fetch(`${HOST}/api/reservation/latest-booking`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: ApiResponse<LatestBooking[]> = await res.json();
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

export async function getUserInfoRequest(): Promise<ApiResponse<User>> {
  try {
    const res = await fetch(`${HOST}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: ApiResponse<User> = await res.json();
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
