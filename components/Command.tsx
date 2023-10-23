"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { navigationList } from "@/data";
import Link from "next/link";

type CommandProps = {
  hidden?: boolean;
};

const Command: React.FC<CommandProps> = ({
  hidden = false,
}): React.ReactNode => {
  const [open, setOpen] = React.useState(false);
  const keyCode = "k";

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isJPressed = e.key === keyCode;
      const isMetaOrCtrlPressed = e.metaKey || e.ctrlKey;
      if (isJPressed && isMetaOrCtrlPressed) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        className={hidden ? "hidden" : ""}
        hidden={hidden}
        variant="outline"
        onClick={() => setOpen(true)}
      >
        Menu
        <kbd className="ml-2 pointer-events-none lg:inline-flex h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-medium text-muted-foreground opacity-100 hidden">
          {" "}
          <span className="text-xs">
            ⌘ <span className="uppercase">{keyCode}</span>
          </span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Page Menu">
            {navigationList.map(({ name, icon: Icon, href }) => (
              <Link key={name} href={href}>
                <CommandItem className="cursor-pointer">
                  <Icon className="w-4 h-4 mr-2" />
                  <span>{name}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Command;
