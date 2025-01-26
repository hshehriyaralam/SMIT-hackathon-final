import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-indigo-600 text-white hover:bg-indigo-700",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100",
        secondary:
          "bg-teal-600 text-white hover:bg-teal-700",
        ghost: "hover:bg-indigo-100 hover:text-indigo-600",
        link: "text-indigo-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3", // Larger size for a more prominent button
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
