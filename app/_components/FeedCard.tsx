"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { CalendarDaysIcon, Clock3Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Flex } from "@radix-ui/themes";
import { TFeedPost, TReactionOption, reactionOptions } from "@/data/index";
import Reactions from "./Reactions";
import { cn, timeAgo } from "@/lib/utils";
import dayjs from "dayjs";
import BlurVideo from "./BlurVideo";
import BlurImage from "./BlurImage";

type FeedCardProps = TFeedPost & {
  className?: string;
};

type UserInformationProps = {
  user: {
    avatar: StaticImageData;
    name: string;
  };
  createdAt: string;
};

type MediaItem = {
  type: string | "image" | "video";
  src: string;
  width?: number;
  height?: number;
};

type MediaContentProps = {
  media: MediaItem[];
};

const FeedCard: React.FC<FeedCardProps> = ({
  className,
  user,
  createdAt,
  content,
  media,
  likes,
}): React.ReactNode => {
  const [distinctReactions, setDistinctReactions] = useState<TReactionOption[]>(
    []
  );

  const [totalReactionsCount, setTotalReactionsCount] = useState<number>(0);

  useEffect(() => {
    const reactionCounts = new Map<number, number>();
    likes.forEach((like) => {
      const reactionId = like.reactionId;
      reactionCounts.set(reactionId, (reactionCounts.get(reactionId) || 0) + 1);
    });

    const sortedReactions = Array.from(reactionCounts.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    const distinctLikes = sortedReactions.slice(0, 3).map((like) => like[0]);

    const distinctReactionsArray = distinctLikes.map((reactionId) =>
      reactionOptions.find((r) => r.id === reactionId)
    );

    setDistinctReactions(distinctReactionsArray as TReactionOption[]);

    const totalReactionCount = sortedReactions.reduce(
      (total, [, count]) => total + count,
      0
    );

    setTotalReactionsCount(totalReactionCount);
  }, [likes]);

  return (
    <Card className={className}>
      <CardHeader>
        <Flex justify="between" align="center">
          <UserInformation user={user} createdAt={createdAt} />
        </Flex>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {media && media.length > 0 ? <MediaContent media={media} /> : null}
      </CardContent>
      <CardFooter>
        <Flex className="w-full" align="center" justify="between">
          <Flex gap="6" align="center">
            <div className="flex flex-row items-center gap-1 text-base font-medium">
              {distinctReactions.length > 0 && (
                <>
                  {distinctReactions.map((reaction) => (
                    <span
                      key={reaction.id}
                      className="flex flex-row items-center gap-1"
                    >
                      <Image
                        src={reaction.imageSrc}
                        width={24}
                        height={24}
                        alt={`react-${reaction.label}`.toLowerCase()}
                      />
                    </span>
                  ))}
                </>
              )}
              {totalReactionsCount > 0 ? (
                <p className="ml-1">
                  {totalReactionsCount}{" "}
                  {totalReactionsCount > 1 ? "reactions" : "reaction"}
                </p>
              ) : (
                <p className="ml-1">No reactions</p>
              )}
            </div>
          </Flex>
          <Reactions />
        </Flex>
      </CardFooter>
    </Card>
  );
};

const UserInformation: React.FC<UserInformationProps> = ({
  user,
  createdAt,
}): React.ReactNode => (
  <Flex gap="4" direction="row" justify="start" align="center">
    <Image
      className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-slate-800"
      src={user.avatar}
      width={48}
      height={48}
      alt="Avatar"
      priority
      placeholder="blur"
    />
    <Flex direction="column" justify="center">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <div className="flex flex-row flex-wrap items-center gap-2 text-sm text-gray-500">
        {timeAgo(createdAt)}
        <span className="flex flex-row items-center">
          <CalendarDaysIcon className="mr-1" size={16} />
          {dayjs(createdAt).format("dddd, DD MMM YYYY")}{" "}
        </span>
        <span className="flex flex-row items-center">
          <Clock3Icon className="mr-1" size={16} />
          {dayjs(createdAt).format("HH:mm A")}
        </span>
      </div>
    </Flex>
  </Flex>
);

const MediaContent: React.FC<MediaContentProps> = ({
  media,
}): React.ReactNode => (
  <div className="flex flex-row gap-4 pb-4 mt-4 overflow-x-auto rounded-lg snap-x snap-mandatory">
    {media.map((mediaItem, index) => (
      <React.Fragment key={index.toString()}>
        {mediaItem.type === "image" ? (
          <BlurImage
            className={cn(
              "object-contain w-auto bg-zinc-200 dark:bg-slate-800 bg-no-repeat bg-cover rounded-lg h-80",
              index === 0
                ? "snap-start"
                : index === media.length - 1
                ? "snap-end"
                : "snap-center"
            )}
            src={mediaItem.src}
            width={180}
            height={320}
            alt=""
            priority={index === 0}
            placeholder="blur"
            blurDataURL={mediaItem.src}
          />
        ) : null}

        {mediaItem.type === "video" ? (
          <BlurVideo
            className={cn(
              "object-contain w-auto bg-zinc-200 dark:bg-slate-800 bg-no-repeat bg-cover rounded-lg h-80",
              index === 0
                ? "snap-start"
                : index === media.length - 1
                ? "snap-end"
                : "snap-center"
            )}
            src={mediaItem.src}
            width={mediaItem.width}
            height={320}
            controls
            controlsList="nodownload"
          />
        ) : null}
      </React.Fragment>
    ))}
  </div>
);

export default FeedCard;
