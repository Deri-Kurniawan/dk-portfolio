import React, { useState } from "react";
import { SmilePlusIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TReactionOption, reactionOptions } from "@/data";

const Reactions: React.FC = (): React.ReactNode => {
  const [selectedReaction, setSelectedReaction] =
    useState<TReactionOption | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <AnimatePresence>
        {selectedReaction !== null ? (
          <Image
            src={selectedReaction.imageSrc}
            alt={selectedReaction.label}
            width={24}
            height={24}
          />
        ) : (
          <SmilePlusIcon />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 -top-12"
          >
            <div className="flex flex-row items-center w-full gap-2 p-2 border rounded-3xl bg-background">
              {reactionOptions.map((reaction) => (
                <ReactionItem
                  key={reaction.id}
                  id={reaction.id}
                  label={reaction.label}
                  imageSrc={reaction.imageSrc}
                  isHovered={isHovered}
                  setIsHovered={setIsHovered}
                  setSelectedReaction={setSelectedReaction}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

type ReactionItemProps = {
  id: number;
  label: string;
  imageSrc: StaticImageData;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedReaction: React.Dispatch<React.SetStateAction<any>>;
};

const ReactionItem: React.FC<ReactionItemProps> = ({
  id,
  label,
  imageSrc,
  isHovered,
  setIsHovered,
  setSelectedReaction,
}: {
  id: number;
  label: string;
  imageSrc: StaticImageData;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedReaction: React.Dispatch<React.SetStateAction<any>>;
}): React.ReactNode => {
  const [isReactionHovered, setIsReactionHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsHovered(false);
    setSelectedReaction(reactionOptions.find((reaction) => reaction.id === id));
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={isReactionHovered}>
        <TooltipTrigger asChild>
          <motion.div
            className="cursor-pointer w-9 h-9"
            initial={{ scale: 0 }}
            animate={{
              scale: isReactionHovered ? 1.2 : 1,
              y: isReactionHovered ? -10 : 0,
            }}
            whileHover={{
              scale: isHovered ? 1.2 : 1,
              y: isHovered ? -10 : 0,
            }}
            whileTap={{ scale: 1.2, y: -10 }}
            transition={{
              duration: 0.15,
            }}
            onMouseEnter={() => setIsReactionHovered(true)}
            onMouseLeave={() => setIsReactionHovered(false)}
            onClick={handleClick}
          >
            <TooltipContent>
              <p className="text-xs">{label}</p>
            </TooltipContent>
            <Image
              src={imageSrc}
              alt={label}
              className="w-full h-full bg-zinc-200 dark:bg-slate-800 rounded-full"
              width={36}
              height={36}
            />
          </motion.div>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Reactions;
