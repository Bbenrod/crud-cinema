// Movies.js
import React from 'react';

const Movies = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 w-64 p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Películas</h2>
      <ul className="space-y-2">
        <li>
          <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Avengers: Endgame
          </a>
        </li>
        <li>
          <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Joker
          </a>
        </li>
        <li>
          <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Parasite
          </a>
        </li>
        <li>
          <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            1917
          </a>
        </li>
        <li>
          <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Mulan
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Movies;