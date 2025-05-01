import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Utlis
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
