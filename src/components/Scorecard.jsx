import React from "react";

const Scorecard = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-1 overflow-hidden mb sm:p-3 overflow-y-hidden">
      {/* -----------------This Code is for the tabs------------------------------ */}
      <small class="text-4xl dark:text-white ml-0 font-semibold text-gray-500 dark:text-gray-400">
        Scorecard
      </small>
      <div className="flex min-h-screen">
        <ul className="mx-auto grid grid-cols-3 gap-x-5 px-8">
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="yes"
              name="answer"
              id="yes"
              checked
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
              for="yes"
            >
              Live
            </label>

            <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1  dark:bg-gray-800  sm:rounded-lg overflow-hidden">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-lg">
                        <h3>Team name</h3>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        R
                      </th>
                      <th scope="col" class="px-6 py-3">
                        B
                      </th>
                      <th scope="col" class="px-6 py-3">
                        S.R
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-lg">
                        <h3>Team name</h3>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        R
                      </th>
                      <th scope="col" class="px-6 py-3">
                        B
                      </th>
                      <th scope="col" class="px-6 py-3">
                        S.R
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player 1
                      </th>
                      <td class="px-6 py-4">25</td>
                      <td class="px-6 py-4">11</td>
                      <td class="px-6 py-4">112.4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </li>

          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="no"
              name="answer"
              id="no"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
              for="no"
            >
              Scorecard
            </label>

            <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1  dark:bg-gray-800  sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                        required=""
                      />
                    </div>
                  </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Player name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Wickets
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Economy
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Team
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Best
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player A
                      </th>
                      <td className="px-4 py-3">21</td>
                      <td className="px-4 py-3">1.77</td>
                      <td className="px-4 py-3">Team 4</td>
                      <td className="px-4 py-3">3 / 2.8</td>
                    </tr>

                    <tr className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player B
                      </th>
                      <td className="px-4 py-3">11</td>
                      <td className="px-4 py-3">4.77</td>
                      <td className="px-4 py-3">Team 1</td>
                      <td className="px-4 py-3">2 / 4.0</td>
                    </tr>

                    <tr className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Player C
                      </th>
                      <td className="px-4 py-3">20</td>
                      <td className="px-4 py-3">2.77</td>
                      <td className="px-4 py-3">Team 2</td>
                      <td className="px-4 py-3">4 / 3.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* ---------------------------------- This Code is for the tables------------------- */}
    </section>
  );
};

export default Scorecard;
