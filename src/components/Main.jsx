import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <main>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Live Matches
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
        </div>
      </section>
      <Card />
    </main>
  );
};

export default Main;
