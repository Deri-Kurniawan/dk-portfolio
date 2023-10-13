import React from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Command from "./Command";

type TopbarProps = {
  pageTitle: string;
};

const Topbar: React.FC<TopbarProps> = ({
  pageTitle = "Untitled",
}): React.ReactNode => {
  return (
    <Flex
      className="px-2 pb-4"
      direction="row"
      justify="between"
      align="center"
    >
      <Heading as="h2" size="6" weight="bold">
        {pageTitle}
      </Heading>
      <Command />
    </Flex>
  );
};

export default Topbar;
