import React from "react";

const Cardboard = () => {
  return (
    <div class="grid gap-8">
      <div class="p-8  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-5 text-gray-500">
          <p class="bg-primary-100 text-red-500-800 text-xs text-red-700 font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">
            <svg
              class="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            Live
          </p>
          <span class="text-sm">1 hour</span>
        </div>
        <h3 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">INDW151-3 (19)</a>
        </h3>
        <h3 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">PAKW149-4 (20)</a>
        </h3>
        <p class="mb-5 text-1xl font-light text-gray-500 dark:text-gray-400">
          India Women won by 7 wkts
        </p>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span class="font-medium dark:text-white">Featured Match</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardboard;
