"use server";

import { LatestBooking } from "@/dummydata/latest_booking";
import { Reservation } from "@/dummydata/reservations";
import {
	getLatestRequest,
	getOverviewRequest,
} from "@/lib/services/dummyApiRequests";

export async function getOverview(): Promise<Reservation[]> {
	const res = await getOverviewRequest();
	if (!res.success) throw new Error(res.errors);
	return res.data;
}

export async function getLatest(): Promise<LatestBooking[]> {
	const res = await getLatestRequest();
	if (!res.success) throw new Error(res.errors);
	return res.data;
}
