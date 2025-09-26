"use client";

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
import { getUserInfoRequest } from "@/lib/services/dummyApiRequests";
import { LogOut } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderUserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      setIsFetching(true);
      const res = await getUserInfoRequest();
      if (res.success) setUser(res.data);
      setIsFetching(false);
    };
    getSession();
  }, []);

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
            {isFetching ? (
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
              {isFetching ? <LoadingComponent size={10} /> : user?.name}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            {isFetching ? "..." : user?.email}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex" onClick={Logout}>
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
