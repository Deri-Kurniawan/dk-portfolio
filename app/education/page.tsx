import React from "react";
import { Metadata } from "next";
import { educationList } from "@/data";
import Topbar from "@/components/Topbar";
import EducationCard from "./_components/EducationCard";
import BornCard from "./_components/BornCard";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deri.my.id"),
  title: "Developer Education - Deri Kurniawan",
  description:
    "Follow my educational journey and stay updated with my latest insights, learnings, and experiences in my current education.",
  keywords:
    "Deri Kurniawan, Education Journey, Learning, Insights, Experiences, Current Education, Student Life",
  openGraph: {
    title: "Developer Education by Deri Kurniawan",
    description:
      "Follow my educational journey and stay updated with my latest insights, learnings, and experiences in my current education.",
    url: "https://www.deri.my.id",
    type: "website",
    images: [
      {
        url: "https://og.deri.my.id/api/og?title=Education Journey&tw=text-6xl_font-bold",
        width: 1280,
        height: 720,
        alt: "Developer Education - Deri Kurniawan",
      },
    ],
  },
};

export default function DeveloperEducationPage(): React.ReactNode {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <div className="w-full px-2">
          <Topbar pageTitle="Education Journey" />
        </div>
        <div className="px-2">
          {educationList && educationList.length > 0 ? (
            <div className="grid justify-between grid-flow-row grid-cols-1 gap-4 grid-row lg:grid-cols-2 lg:justify-center">
              {educationList.map((education) => (
                <EducationCard
                  key={education.id}
                  className="col-span-1"
                  {...education}
                />
              ))}
              <BornCard
                className={
                  (educationList.length - 1) % 2 !== 0
                    ? "col-span-1 lg:col-span-2 inline-grid"
                    : ""
                }
              />
            </div>
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
      </div>
    </div>
  );
}
