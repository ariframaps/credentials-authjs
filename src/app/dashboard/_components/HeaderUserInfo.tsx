"use client";

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
import { User } from "next-auth";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderUserInfo = () => {
  const [user, setUser] = useState<User | null>(null);

  const logoutHandler = async () => {
    await Logout();
  };

  useEffect(() => {
    const getSession = async () => {
      const res = await fetch("/api/auth/session");
      const session = await res.json();
      if (session?.user) setUser(session.user);
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
            John doe
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
              {user?.name}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>{user?.email}</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex" onClick={logoutHandler}>
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
