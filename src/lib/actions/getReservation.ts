"use server";

import {
  getLatestRequest,
  getOverviewRequest,
} from "@/lib/services/dummyApiRequests";
import { LatestBooking, Reservation } from "@/types/dummyTypes";

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
