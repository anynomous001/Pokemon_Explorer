import React from "react";

interface GridBackgroundDemoProps {
  children: React.ReactNode;
  // onClick: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function GridBackgroundDemo({ children }: GridBackgroundDemoProps) {
  return (
    <div className="min-h-[100vh] w-full bg-black dark:bg-white bg-grid-white/[0.1] dark:bg-grid-black/[0.2] relative ">
      {/* Radial gradient for the faded effect */}
      <div className="absolute pointer-events-none inset-0 flex  bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 py-8">
        {children
        }      </p>
    </div>
  );
}
