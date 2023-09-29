import React from "react";

const Banner: React.FC = (): React.ReactNode => {
  return (
    <div className="w-full py-1 rounded-bl-lg rounded-br-lg shadow-sm bg-zinc-100 dark:bg-slate-800 shadow-zinc-400 dark:shadow-zinc-600">
      <p className="px-4 text-center">
        🚧This portfolio website is still under development
        <span className="hidden lg:inline-block">
          . Please come back in the future.
        </span>
        🚧
      </p>
    </div>
  );
};

export default Banner;
