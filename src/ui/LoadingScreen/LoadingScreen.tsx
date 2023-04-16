import React, { FC } from "react";

export const LoadingScreen: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="h-screen w-screen relative bg-slate-900/70">
        <img
          className="object-cover h-screen absolute z-[-1]"
          src="loading/bg.png"
          alt=""
        />
      </div>

      <progress className="progress w-56 absolute" />
      <h1 className="absolute top-4 font-bold tracking-wide text-3xl text-yellow-400">
        STARWARS
      </h1>
    </div>
  );
};
