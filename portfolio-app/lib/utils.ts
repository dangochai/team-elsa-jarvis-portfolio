import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getStatusVariant(status: string): "active" | "beta" | "archived" | "default" {
  switch (status.toLowerCase()) {
    case "active":
      return "active";
    case "beta":
      return "beta";
    case "archived":
      return "archived";
    default:
      return "default";
  }
}
