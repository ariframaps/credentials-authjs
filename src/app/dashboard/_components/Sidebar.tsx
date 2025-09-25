"use client";

import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import LayoutIcon from "@/components/svg/LayoutIcon";
import ReservationIcon from "@/components/svg/ReservationIcon";
import BedIcon from "@/components/svg/BedIcon";
import StarIcon from "@/components/svg/StarIcon";
import SettingIcon from "@/components/svg/SettingIcon";
import { Calendar, ChevronsRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import LogoCompact from "@/components/svg/LogoCompact";
import { useEffect, useState } from "react";
import { useSignUpStore } from "@/lib/stores/signupStore";

// all nav link for side bar
const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <LayoutIcon width={20} height={20} viewBox="0 0 20 20" />,
  },
  {
    href: "/rates",
    label: "Rates & Availability",
    icon: <Calendar width={20} height={20} />,
  },
  {
    href: "/reservation",
    label: "Reservation",
    icon: <ReservationIcon width={20} height={20} viewBox="0 0 20 20" />,
  },
  {
    href: "/room",
    label: "Room",
    icon: <BedIcon width={20} height={20} viewBox="0 0 20 20" />,
  },
  {
    href: "/reviews",
    label: "Guest review",
    icon: <StarIcon width={20} height={20} viewBox="0 0 20 20" />,
  },
  {
    href: "/settings",
    label: "Setting",
    icon: <SettingIcon width={20} height={20} viewBox="0 0 20 20" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // get curretn path
  const [isOpen, setIsOpen] = useState(false);
  const resetState = useSignUpStore((state) => state.reset);

  // clear signup state
  useEffect(() => {
    resetState();
  }, [resetState]);

  return (
    <nav
      className={`${styles.container} ${
        isOpen ? styles.open : ""
      } border-r-[1px] border-neutral-separator bg-neutral-white`}>
      <div
        className={`${styles.header} border-b-[1px] border-neutral-separator`}>
        <LogoCompact
          width={30}
          height={30}
          viewBox="0 0 220 160"
          className={`${styles.header__logoCompact}`}
        />
        <Image
          src={"/Logo-black.png"}
          alt="Go For Umrah Logo"
          width={400}
          height={67}
          className={`${styles.header__logoFull}`}
        />
      </div>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            {...item}
            active={pathname === item.href}
            isOpen={isOpen}
          />
        ))}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.nav__item} cursor-pointer hover:bg-neutral-input`}>
          <ChevronsRightIcon
            className={`duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </ul>
    </nav>
  );
};

// link component
const SidebarLink = ({
  href,
  label,
  icon,
  active,
  isOpen,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  isOpen: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`${
        styles.nav__item
      } duration-200 flex items-center gap-2 rounded-[8px] text-[14px]
        ${
          active
            ? "text-brand-green-color-01 bg-neutral-light font-medium"
            : "text-neutral-primary font-normal hover:text-brand-green-color-01"
        }
      `}>
      {icon}
      <span className={isOpen ? "tablet:block" : "hidden tablet:block"}>
        {label}
      </span>
    </Link>
  );
};

export default Sidebar;
