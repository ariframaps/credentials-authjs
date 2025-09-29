import "server-only";

import { ApiResponse } from "@/types/apiResponseTypes";
import { Reservation } from "@/dummydata/reservations";
import { LatestBooking } from "@/dummydata/latest_booking";

const HOST = process.env.HOST_URL;

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
