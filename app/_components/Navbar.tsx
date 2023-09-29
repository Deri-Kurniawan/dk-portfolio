"use client";

import React from "react";
import { Flex, Heading, ScrollArea } from "@radix-ui/themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggleButton from "@/app/_components/ModeToggleButton";
import { navigationList } from "@/data";
import { usePathname } from "next/navigation";
import Image, { ImageProps } from "next/image";
import { MotionProps, motion } from "framer-motion";
import avatarImage from "@/assets/images/avatar.jpeg";
import dkLogoImage from "@/assets/images/dk-logo.png";

const AnimatedImage: React.FC<ImageProps & MotionProps> = motion(Image);

const Navbar: React.FC = (): React.ReactNode => {
  const pathname = usePathname();

  return (
    <nav>
      <Profile />
      <ScrollArea
        className="px-8 py-0 mt-6 max-h-[calc(100vh-300px)]"
        type="auto"
        scrollbars="vertical"
      >
        <ul className="space-y-2">
          {navigationList.map(({ name, icon: Icon, href }) => (
            <li key={name}>
              <Button
                asChild
                variant={pathname === href ? "default" : "ghost"}
                className={`flex flex-row justify-start w-full`}
              >
                <Link href={href}>
                  <Icon className="w-4 h-4 mr-2" /> {name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <div className="flex justify-end px-8 py-2">
        <ModeToggleButton />
      </div>
    </nav>
  );
};

const Profile: React.FC = (): React.ReactNode => {
  const [isHover, setHover] = React.useState(false);

  return (
    <Flex className="w-full p-8 pb-0" direction="column" align="center">
      <motion.div
        className="relative w-32 h-32"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <AnimatedImage
          animate={{
            scale: isHover ? 1.2 : 1,
            opacity: isHover ? 0 : 1,
            transition: { duration: 0.3 },
          }}
          className="absolute z-[1] top-0 bottom-0 left-0 right-0 w-32 h-32 rounded-full shadow-inner bg-white/70 dark:bg-slate-800"
          src={avatarImage}
          width={128}
          height={128}
          alt="Avatar"
          placeholder="blur"
        />
        <AnimatedImage
          animate={{
            scale: isHover ? 1 : 1.2,
            opacity: isHover ? 1 : 0,
            transition: { duration: 0.3 },
          }}
          className="w-32 h-32 rounded-full shadow-inner bg-white/70 dark:bg-black/70"
          src={dkLogoImage}
          width={128}
          height={128}
          alt="DK Logo"
          placeholder="blur"
        />
        <div className="absolute rounded-full shadow-xl -left-2 -top-2 -z-10">
          <div className="rounded-full w-36 h-36 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 animate-spin" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 rounded-full -z-20"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 animate-spin blur-xl" />
        </motion.div>
      </motion.div>

      <div className="mt-4">
        <Heading as="h1" size="6">
          Deri Kurniawan
        </Heading>
      </div>
      <div className="mt-2">
        <Heading as="h2" size="3" weight="medium" className="text-gray-500">
          Full Stack Developer
        </Heading>
      </div>
    </Flex>
  );
};

export default Navbar;
