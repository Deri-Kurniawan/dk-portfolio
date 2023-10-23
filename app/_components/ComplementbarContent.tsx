"use client";

import React from "react";
import { gallery } from "@/data";
import { cn } from "@/lib/utils";
import { Flex, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import BlurImage from "@/components/BlurImage";
import BlurVideo from "@/components/BlurVideo";

const ComplementbarContent: React.FC = (): React.ReactNode => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Flex gap="2" direction="column">
        <div>
          <Heading as="h5" size="6" weight="bold">
            Developer Gallery
          </Heading>
          {gallery && gallery.length > 0 ? (
            <div className="flex flex-row gap-4 pb-2 mt-4 overflow-x-auto rounded-lg snap-x snap-mandatory">
              {gallery.map((media, index) => (
                <React.Fragment key={index.toString()}>
                  {media.type === "image" ? (
                    <BlurImage
                      className={cn(
                        "object-contain w-auto bg-zinc-200 dark:bg-slate-800 rounded-lg h-60 cursor-pointer",
                        index === 0
                          ? "snap-start"
                          : index === gallery.length - 1
                          ? "snap-end"
                          : "snap-center"
                      )}
                      src={media.src}
                      width={150}
                      height={240}
                      alt=""
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL={media.src}
                      onClick={() => {
                        router.push(`/gallery/${media.id}`);
                      }}
                    />
                  ) : null}

                  {media.type === "video" ? (
                    <BlurVideo
                      className={cn(
                        "relative object-contain w-auto bg-zinc-200 dark:bg-slate-800 bg-no-repeat bg-cover rounded-lg h-60 cursor-pointer",
                        index === 0
                          ? "snap-start"
                          : index === gallery.length - 1
                          ? "snap-end"
                          : "snap-center"
                      )}
                      width={150}
                      height={240}
                      src={media.src}
                      loop
                      onClick={() => {
                        router.push(`/gallery/${media.id}`);
                      }}
                      onMouseEnter={(e) => {
                        if (e.currentTarget.readyState === 4) {
                          e.currentTarget?.play();
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (e.currentTarget.readyState === 4) {
                          e.currentTarget?.pause();
                          e.currentTarget.currentTime = 0;
                        }
                      }}
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p>
              <span className="text-gray-500">No gallery found.</span>
            </p>
          )}
        </div>

        <div>
          <Heading as="h5" size="6" weight="bold">
            Developer Band Song
          </Heading>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: `<iframe style="border-radius: 0.5rem;" width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/695523853&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`,
            }}
          ></div>
          <p className="mt-2 text-xs text-center text-gray-500">
            Song by{" "}
            <a
              href="https://soundcloud.com/derikurniawan/cinta-dan-bahagia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500"
            >
              Mercurii Band
            </a>
            {" - "}
            <a
              href="https://soundcloud.com/derikurniawan/cinta-dan-bahagia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500"
            >
              Cinta dan Bahagia
            </a>
          </p>
        </div>
      </Flex>
    </React.Fragment>
  );
};

export default ComplementbarContent;
