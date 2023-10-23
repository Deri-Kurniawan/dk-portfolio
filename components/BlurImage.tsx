import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, forwardRef, useState } from "react";

const BlurImage = forwardRef<HTMLImageElement, ComponentProps<typeof Image>>(
  (props, ref) => {
    const [isLoading, setLoading] = useState(true);

    return (
      <Image
        {...props}
        alt={props.alt}
        className={cn(
          props.className,
          "duration-200 ease-in-out",
          isLoading ? "blur-sm" : "blur-0"
        )}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setLoading(false)}
        ref={ref}
      />
    );
  }
);

BlurImage.displayName = "BlurImage";

export default BlurImage;
