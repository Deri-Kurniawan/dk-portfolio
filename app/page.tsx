import React from "react";
import { Metadata } from "next";
import { feedPosts } from "@/data";
import FeedCard from "./_components/FeedCard";
import Topbar from "@/components/Topbar";
import Complementbar from "@/components/Complementbar";
import ComplementbarContent from "./_components/ComplementbarContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://deri.my.id"),
  title: "Developer Feeds - Deri Kurniawan",
  description:
    "Stay updated with the latest developer insights and feeds from Deri Kurniawan. Explore web development projects, coding skills, and more.",
  keywords:
    "Deri Kurniawan, Developer Feeds, Web Development, Coding, Software Engineer, Frontend, Backend, Full Stack, HTML, CSS, JavaScript, React, React Native, Node.js, MySQL, Planet Scale, Express, Next.js, UI Design, Responsive Design",
  openGraph: {
    title: "Developer Feeds by Deri Kurniawan",
    description:
      "Stay updated with the latest developer insights and feeds from Deri Kurniawan. Explore web development projects, coding skills, and more.",
    url: "https://deri.my.id",
    type: "website",
    images: [
      {
        url: "https://og.deri.my.id/api/og?title=Developer Feeds&tw=text-6xl_font-bold",
        width: 1280,
        height: 720,
        alt: "Developer Feeds - Deri Kurniawan",
      },
    ],
  },
};

export default function DeveloperFeedsPage(): React.ReactNode {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <div className="w-full px-2">
          <Topbar pageTitle="Developer Feeds" />
        </div>
        <div className="px-2">
          {feedPosts && feedPosts.length > 0 ? (
            <>
              {feedPosts.map((post, i) => (
                <FeedCard
                  key={post.postId}
                  className={`${i > 0 ? "mt-6" : ""}`}
                  {...post}
                />
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold">No Developer Feed</h1>
              <p className="mt-4 text-base text-gray-500">
                There is no post yet, or developer feed is not available.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="h-full">
        <div className="sticky top-0 pt-4 lg:pt-0">
          <Complementbar>
            <ComplementbarContent />
          </Complementbar>
        </div>
      </div>
    </div>
  );
}
