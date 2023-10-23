import { cn } from "@/lib/utils";
import React, { ComponentProps, useState, useRef, useEffect } from "react";
import useVideoPlayer from "@/hook/useVideoPlayer";

interface BlurVideoProps extends ComponentProps<"video"> {
  src: string;
}

const BlurVideo: React.FC<BlurVideoProps> = ({
  src,
  ...props
}): React.ReactNode => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { handlePlay, handlePause } = useVideoPlayer(src);

  useEffect(() => {
    const videoElement = videoRef.current;

    let unblurTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleCanPlayThrough = () => {
      setIsLoading(false);
    };

    const handleVideoPlay = () => {
      const currentlyPlayingVideo = document.querySelector<HTMLVideoElement>(
        'video[data-playing="true"]'
      );

      if (currentlyPlayingVideo && currentlyPlayingVideo !== videoElement) {
        currentlyPlayingVideo.pause();
        currentlyPlayingVideo.dataset.playing = "false";
      }

      videoElement?.setAttribute("data-playing", "true");
    };

    videoElement?.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement?.addEventListener("play", handleVideoPlay);
    videoElement?.addEventListener("pause", handlePause);

    return () => {
      clearTimeout(unblurTimeout);
      videoElement?.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement?.removeEventListener("play", handleVideoPlay);
      videoElement?.removeEventListener("pause", handlePause);
    };
  }, [src, handlePause]);

  return (
    <>
      <video
        ref={videoRef}
        {...props}
        src={src}
        className={cn(
          props.className,
          "duration-200 ease-in-out",
          isLoading ? "blur-sm" : "blur-none"
        )}
        onPlay={handlePlay}
        onPause={() => videoRef.current?.removeAttribute("data-playing")}
      />
    </>
  );
};

export default BlurVideo;
