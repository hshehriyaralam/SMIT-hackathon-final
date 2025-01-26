import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Defining the variant styles with custom colors
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300", 
  {
    variants: {
      color: {
        primary: "text-indigo-500",
        secondary: "text-gray-600",
        error: "text-red-500",
        disabled: "text-gray-400",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

const Label = React.forwardRef(({ className, color, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ color }), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
