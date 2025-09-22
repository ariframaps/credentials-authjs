import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import BellIcon from "@/components/svg/BellIcon";
import { Input } from "@/components/ui/input";
import DownArrow from "@/components/svg/DownArrow";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div
      className={`${styles.container} bg-blend-color bg-neutral-white border-b-[1px] border-b-neutral-separator`}>
      {/* hotel */}
      <div className={`${styles.left}`}>
        <div className={`${styles.left__property}`}>
          <Image
            src={"/hotel-logo.png"}
            alt={"Hotel"}
            width={48}
            height={48}
            className="rounded-[4px]"
          />
          <div
            className={`${styles.left__property__details} text-neutral-primary`}>
            <h3 className="font-semibold text-[18px]">Big Makkah Hotel</h3>
            <span className="font-normal text-[14px]">#10292827</span>
          </div>
        </div>
        <Link
          href={"#"}
          className="text-[16px] font-semibold duration-150 text-brand-green-color-01 hover:text-green-700  ">
          See your property
        </Link>
      </div>

      {/* info */}
      <div className={`${styles.right}`}>
        <div className={`${styles.right__search}`}>
          <Search
            width={18}
            height={18}
            className={`${styles.right__search__icon} text-neutral-subtle`}
          />
          <Input
            type="search"
            placeholder="Search"
            className="rounded-[10px] text-[14px] font-normal ps-[42px] "
          />
        </div>
        <div className={`${styles.right__notification}`}>
          <BellIcon
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="text-brand-blue_whale-color-01"
          />
        </div>
        <div className={`${styles.right__userDetails}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
