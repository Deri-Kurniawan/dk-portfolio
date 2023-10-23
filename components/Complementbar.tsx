"use client";

import React from "react";
import { ScrollArea } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

interface ComplementbarProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode | null;
}

const Complementbar: React.FC<ComplementbarProps> = ({
  children = null,
  ...props
}: ComplementbarProps): JSX.Element => {
  return (
    <div
      className={cn("w-[330px] hidden xl:block", props.className)}
      {...props}
    >
      <ScrollArea
        className="w-full h-screen pt-2 pb-4 pl-1 pr-4"
        scrollbars="vertical"
        type="auto"
      >
        {children}
      </ScrollArea>
    </div>
  );
};

export default Complementbar;
