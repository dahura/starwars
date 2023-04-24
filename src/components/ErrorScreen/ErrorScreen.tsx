import React from "react";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="h-screen w-screen relative bg-black">
        <img
          className="object-cover h-screen  absolute absolute-center  opacity-70"
          src="error/bg.png"
          alt=""
        />
      </div>
      <div className="absolute bottom-16   max-w-[328px]">
        <h1 className="font-bold tracking-wide text-lg text-white">
          "Looks like the force isn't strong with this one...Data failed to
          load"
        </h1>
        <p className="font-bold tracking-wide text-sm italic absolute right-0  text-white">
          Yoda
        </p>
      </div>
    </div>
  );
};

export { ErrorScreen };
