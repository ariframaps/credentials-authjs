export interface Reservation {
  id: string;
  guestName: string;
  guestImage: string;
  nights: number;
  rooms: number;
  bookingDate: string;
  checkIn: string;
  checkOut: string;
  price: number;
  arrivalTime: string;
  type: "departure" | "arrival" | "stayover";
}

export interface LatestBooking {
  id: string;
  guestName: string;
  guestImage: string;
  nights: number;
  rooms: number;
  checkOut: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  username: string;
  phone: string;
}
