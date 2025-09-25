import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NavButton = ({
  className,
  children,
  type,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  type: "back" | "refresh";
  variant: "transparent" | "default";
}) => {
  const router = useRouter();

  function handleClick() {
    if (type === "back") return router.back();
    else return router.refresh();
  }

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default NavButton;
