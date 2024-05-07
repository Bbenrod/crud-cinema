// Seats.js
import React from 'react';
import { Button } from "@/components/ui/button";

const Seats = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-lg font-semibold mb-4">Selecciona tus asientos</h2>
      <div className="grid grid-cols-6 gap-2" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Asientos seleccionados:</h3>
        <div className="grid grid-cols-5 gap-2">
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md w-8 h-8">
            A1
          </button>
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md w-8 h-8">
            A2
          </button>
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md w-8 h-8">
            A3
          </button>
          <button className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-md w-8 h-8">
            B1
          </button>
          <button className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-md w-8 h-8">
            B2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seats;