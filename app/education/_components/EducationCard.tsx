"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  BackpackIcon,
  BlocksIcon,
  Code2Icon,
  GraduationCapIcon,
  School2Icon,
  SchoolIcon,
} from "lucide-react";
import { TEducation } from "@/data";
import BlurImage from "@/components/BlurImage";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EducationCard: React.FC<TEducation & { className?: string }> = ({
  id,
  title,
  logoSrc,
  school,
  yearStart,
  yearEnd,
  className = "",
}): React.ReactNode => {
  const SelectedIcon = ((): React.ReactNode => {
    const props = {
      className: "w-8 h-8 text-slate-500 dark:text-slate-200",
    };

    switch (id) {
      case "university-x-msib":
        return <Code2Icon {...props} />;
      case "university":
        return <GraduationCapIcon {...props} />;
      case "senior-high-school":
        return <School2Icon {...props} />;
      case "junior-high-school":
        return <SchoolIcon {...props} />;
      case "elementary-school":
        return <BackpackIcon {...props} />;
      case "kindergarten":
        return <BlocksIcon {...props} />;
      default:
        return <GraduationCapIcon {...props} />;
    }
  })();

  return (
    <Link
      href={{
        pathname: `/education`,
        query: {
          utm_source: "deri.my.id",
          utm_medium: "education-card",
          utm_campaign: "education",
        },
      }}
    >
      <Card
        className={cn(
          className,
          "hover:shadow-md transition-all duration-200 ease-linear pt-6 text-center relative w-full h-full"
        )}
      >
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-y-2">
            {SelectedIcon}
            <div className="flex flex-col items-center justify-center">
              <CardTitle className="relative">{school}</CardTitle>
              <CardDescription>{title}</CardDescription>
              <CardDescription>
                {yearStart} - {yearEnd}
              </CardDescription>
              <BlurImage
                className="w-32 h-32 my-1 rounded-lg"
                src={logoSrc}
                width={128}
                height={128}
                alt={`${school} Logo`}
                priority
              />
              <CardDescription>
                (For {yearEnd - yearStart} years)
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EducationCard;
