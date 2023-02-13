import Cardslider from "./Cardslider";

const Main = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                LIVE
              </span>{" "}
              Matches
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              amet.
            </p>
          </div>
        </div>
      </section>
      <Cardslider />
    </main>
  );
};

export default Main;
