import React from "react";

const Leaderboard = () => {
  return (
    <div>
      <table className="table p-4 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              #
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Teams
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Points
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Wins
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">1</td>
            <td className="border p-4 dark:border-dark-5">Jean Marc</td>
            <td className="border p-4 dark:border-dark-5">Louis</td>
            <td className="border p-4 dark:border-dark-5">Jl987</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
