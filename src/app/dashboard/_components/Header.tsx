import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import BellIcon from "@/components/svg/BellIcon";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderUserInfo from "./HeaderUserInfo";

const Header = () => {
  return (
    <header
      className={`${styles.container} bg-blend-color bg-neutral-white border-b-[1px] border-b-neutral-separator`}>
      {/* hotel */}
      <div className={`${styles.left}`}>
        <div className={`${styles.left__property}`}>
          <Image
            src={"/hotel-logo.png"}
            alt={"Hotel"}
            width={48}
            height={48}
            className={`${styles.left__property__img}`}
          />
          <div
            className={`${styles.left__property__details} text-neutral-primary`}>
            <h3 className="font-semibold text-[16px] phone:text-[18px]">
              Big Makkah Hotel
            </h3>
            <span className="font-normal text-[14px]">#10292827</span>
          </div>
        </div>
        <Link
          href={"#"}
          // className="tablet:text-[16px] text-[14px] phone:font-semibold font-medium duration-150 text-brand-green-color-01 hover:text-green-700  "
        >
          <Button variant={"noborder"} className="p-0">
            See your property
          </Button>
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
        <div className={`${styles.right__notification} relative`}>
          <BellIcon
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="text-brand-blue_whale-color-01"
          />
          <div className="absolute top-0 right-0 w-[10px] h-[10px] bg-text-danger-tertiary rounded-full border-2 border-neutral-white "></div>
        </div>

        <div className={`${styles.right__userDetails}`}>
          <HeaderUserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
