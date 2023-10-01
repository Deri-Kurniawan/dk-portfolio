import React from "react";
import { Metadata } from "next";
import { ScrollArea } from "@radix-ui/themes";
import { educationList } from "@/data";
import Topbar from "@/app/_components/Topbar";
import EducationCard from "./_components/EducationCard";
import BornCard from "./_components/BornCard";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-website.com"),
  title: "Developer Education - Deri Kurniawan",
  description:
    "Follow my educational journey and stay updated with my latest insights, learnings, and experiences in my current education.",
  keywords:
    "Deri Kurniawan, Education Journey, Learning, Insights, Experiences, Current Education, Student Life",
  openGraph: {
    title: "Developer Education by Deri Kurniawan",
    description:
      "Follow my educational journey and stay updated with my latest insights, learnings, and experiences in my current education.",
    url: "https://your-website.com",
    type: "website",
    images: [
      {
        url: "https://og.your-website.com/api/og?title=Developer Education&tw=text-6xl_font-bold",
        width: 1280,
        height: 720,
        alt: "Developer Education - Deri Kurniawan",
      },
    ],
  },
};

export default function DeveloperEducationPage(): React.ReactNode {
  return (
    <>
      <div className="w-full pl-1 pr-4">
        <Topbar pageTitle="Education Journey" />
      </div>
      <div className="pb-6 pl-1 pr-4">
        {educationList && educationList.length > 0 ? (
          <>
            {educationList.map((education, i) => (
              <EducationCard
                key={education.id}
                className={`${i > 0 ? "mt-6" : ""}`}
                {...education}
              />
            ))}
            <BornCard className="mt-6" />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full text-center">
            <h1 className="text-2xl font-bold">No Updates Available</h1>{" "}
            <p className="mt-4 text-base text-gray-500">
              There are currently no updates available about Developer
              Education. Please check back later.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
