"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import EyeOpen from "../svg/EyeOpen";
import EyeClose from "../svg/EyeClose";

interface InputProps extends React.ComponentProps<"input"> {
  isError?: boolean;
}

function Input({ className, type, isError, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const inputClasses = cn(
    "placeholder:text-neutral-subtle w-full min-w-0 rounded-[10px] border px-[16px] py-[13px] text-[14px] transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:ring-inset focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
    isError
      ? "border-text-danger-tertiary focus-visible:border-text-danger-tertiary focus-visible:ring-red-500/50 bg-danger-surface"
      : "border-neutral-input bg-neutral-light",
    className
  );

  if (type === "password") {
    return (
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          data-slot="input"
          className={inputClasses}
          {...props}
        />
        <div
          className="absolute right-[16px]"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOpen width={20} height={20} viewBox="0 0 20 20" />
          ) : (
            <EyeClose width={20} height={20} viewBox="0 0 20 20" />
          )}
        </div>
      </div>
    );
  }

  return (
    <input type={type} data-slot="input" className={inputClasses} {...props} />
  );
}

export { Input };
