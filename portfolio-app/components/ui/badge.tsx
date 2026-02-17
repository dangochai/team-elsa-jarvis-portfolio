import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
        active:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        beta:
          "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
        archived:
          "border-transparent bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
        secondary:
          "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
        outline: "text-foreground",
        tech:
          "border-transparent bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
