import React from "react";

const Navbar = () => {
  return (
    <nav>
      <header class="pb-6 bg-white lg:pb-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <p class="w-auto font-heading h-8 lg:h-10">DCA GUJRAT</p>
              </a>
            </div>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a
                href="#"
                title=""
                class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Home{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Live Matches{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Leaderboard{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Recently Included{" "}
              </a>
            </div>
          </nav>

          <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
              <div class="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#"
                  title=""
                  class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Home{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Live Matches{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Leaderboard{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Recently Included{" "}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
