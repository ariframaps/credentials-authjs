import LoadingComponent from "@/components/LoadingComponent";
import styles from "./HeaderUserInfo.module.scss";
import DownArrow from "@/components/svg/DownArrow";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Logout } from "@/lib/actions/authActions";
import { LogOut } from "lucide-react";
import Image from "next/image";
import getUser from "@/lib/actions/getUser";

const HeaderUserInfo = async () => {
	const user = await getUser();

	if (user == null)
		return (
			<span className="text-[14px] font-light text-text-danger-tertiary">
				Unauthorized
			</span>
		);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className={`${styles.userDetails} duration-200 cursor-pointer rounded-[10px] hover:bg-neutral-light`}>
					<Image
						src={"/Avatar.png"}
						alt={"User profile image"}
						width={32}
						height={32}
					/>
					<span className="font-semibold text-[14px] text-neutral-primary">
						{user == undefined ? (
							<LoadingComponent size={10} />
						) : (
							user?.name ?? "Unknown"
						)}
					</span>
					<DownArrow
						width={20}
						height={20}
						viewBox="0 0 20 20"
						className="text-neutral-secondary"
					/>
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-fit bg-neutral-white" align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						<span
							className={`duration-200 flex items-center gap-2 rounded-[8px] text-[14px] font-normal text-neutral-primary`}>
							{user == undefined ? (
								<LoadingComponent size={10} />
							) : (
								user?.name
							)}
						</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						{user == undefined ? "..." : user?.email}
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						className="flex"
						onClick={() => {
							localStorage.removeItem("sessionExpiry");
							Logout();
						}}>
						Log out
						<DropdownMenuShortcut>
							<LogOut />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default HeaderUserInfo;
