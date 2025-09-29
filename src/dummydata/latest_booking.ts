export interface LatestBooking {
	id: string;
	guestName: string;
	guestImage: string;
	nights: number;
	rooms: number;
	checkOut: string;
	status: "Confirmed" | "Pending" | "Cancelled";
}

export const LatestbookingDummyData: LatestBooking[] = [
	{
		id: "13019281",
		guestName: "Kristin Watson",
		guestImage: "https://i.pravatar.cc/150?img=5",
		nights: 1,
		rooms: 5,
		checkOut: "8 Des 2021",
		status: "Confirmed",
	},
	{
		id: "13019282",
		guestName: "Jacob Jones",
		guestImage: "https://i.pravatar.cc/150?img=6",
		nights: 2,
		rooms: 3,
		checkOut: "12 Des 2021",
		status: "Pending",
	},
	{
		id: "13019283",
		guestName: "Theresa Webb",
		guestImage: "https://i.pravatar.cc/150?img=7",
		nights: 4,
		rooms: 2,
		checkOut: "15 Des 2021",
		status: "Cancelled",
	},
	{
		id: "13019284",
		guestName: "Marvin McKinney",
		guestImage: "https://i.pravatar.cc/150?img=8",
		nights: 3,
		rooms: 1,
		checkOut: "20 Des 2021",
		status: "Confirmed",
	},
];
