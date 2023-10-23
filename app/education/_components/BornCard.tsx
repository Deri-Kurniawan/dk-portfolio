"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BabyIcon, LinkIcon } from "lucide-react";
import babyImage from "@/assets/images/baby-play-phone.webp";
import BlurImage from "@/components/BlurImage";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BornCard: React.FC<{ className?: string }> = ({
  className = "",
}): React.ReactNode => {
  const id = "born";
  return (
    <Card
      className={cn(
        className,
        "pt-6 text-center hover:shadow-md transition-all duration-200 ease-linear"
      )}
      id={id}
    >
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <BabyIcon className="w-8 h-8 text-slate-500 dark:text-slate-200" />
          <div className="flex flex-col items-center justify-center">
            <CardTitle className="relative">
              <div className="absolute flex items-center w-full h-full opacity-0 group-hover:opacity-100 -left-6">
                <LinkIcon size={16} />
              </div>
              Born
            </CardTitle>
            <CardDescription>
              I was born in a small city called Sukabumi, West Java, Indonesia.
            </CardDescription>
            <CardDescription>05 June 2001</CardDescription>
            <a
              href="https://www.freepik.com/free-vector/cute-baby-boy-playing-phone-cartoon-vector-icon-illustration-people-technology-icon-isolated-flat_30510439.htm#page=2&query=vector%20toddlers&position=36&from_view=search&track=ais"
              title="Image by catalyststuff on Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlurImage
                className="w-32 h-32 my-2 rounded-lg"
                src={babyImage}
                width={128}
                height={128}
                alt="Baby Image"
              />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BornCard;
