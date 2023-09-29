import Command from "@/app/_components/Command";
import { Button } from "@/components/ui/button";
import { Text } from "@radix-ui/themes";
import React from "react";

export default function NotFound(): React.ReactNode {
  return (
    <>
      <Command hidden={true} />
      <div className="flex flex-col items-center justify-center w-full h-full gap-y-2">
        <span className="flex flex-row items-center justify-center w-40 h-40 font-bold text-red-500 bg-red-100 rounded-full text-9xl">
          404
        </span>
        <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
        <Text size="4">The page you are looking for is not found.</Text>
        <Button className="mt-4" variant="default" asChild>
          <a href="/">Back to Main</a>
        </Button>
      </div>
    </>
  );
}
