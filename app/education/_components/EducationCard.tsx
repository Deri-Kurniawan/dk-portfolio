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
  GraduationCapIcon,
  Link,
  School2Icon,
  SchoolIcon,
} from "lucide-react";
import { TEducation } from "@/data";
import BlurImage from "@/app/_components/BlurImage";

const EducationCard: React.FC<TEducation & { className: string }> = ({
  id,
  title,
  logoSrc,
  school,
  yearStart,
  yearEnd,
  className,
}): React.ReactNode => {
  const SelectedIcon = ((): React.ReactNode => {
    const props = {
      className: "w-8 h-8 text-slate-500 dark:text-slate-200",
    };

    switch (id) {
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
    <Card className={className} id={id}>
      <CardContent className="pt-6 text-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          {SelectedIcon}
          <div className="flex flex-col items-center justify-center">
            <a className="relative group" href={`#${id}`}>
              <div className="absolute flex items-center w-full h-full opacity-0 group-hover:opacity-100 -left-6">
                <Link size={16} />
              </div>
              <CardTitle>{school}</CardTitle>
            </a>
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
            <CardDescription>(For {yearEnd - yearStart} years)</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
