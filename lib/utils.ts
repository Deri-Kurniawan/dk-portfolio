import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

export function timeAgo(date: string) {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
}
