import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "w-full rounded-[10px] border-[2px] border-brand-green-color-01 duration-150 text-[14px] font-semibold",
  {
    variants: {
      variant: {
        default:
          "bg-brand-green-color-01 text-primary-foreground hover:bg-green-700",
        transparent:
          "bg-transparent text-neutral-primary hover:bg-neutral-input",
      },
      size: {
        default: "p-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
