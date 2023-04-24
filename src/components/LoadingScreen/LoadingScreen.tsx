import React, { FC } from "react";

export const LoadingScreen: FC = () => {
  return (
    <>
      <div className="fade"></div>
      <div className="star-wars-bg"></div>

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
          </div>
          <p>"A long time ago... ,</p>
          <p>data from a faraway galaxy is loading. Please wait." </p>
        </div>
      </section>
    </>
  );
};
