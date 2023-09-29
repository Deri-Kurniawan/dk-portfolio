import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ComponentProps, useState } from "react";

const BlurImage: React.FC<ComponentProps<typeof Image>> = (
  props
): React.ReactNode => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading ? "blur-sm" : "blur-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BlurImage;
