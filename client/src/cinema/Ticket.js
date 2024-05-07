// Ticket.js
import React from 'react';
import { Button } from "@/components/ui/button";

const Ticket = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 w-64 p-6">
      <h2 className="text-lg font-semibold mb-4">Resumen</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-medium">Película</h3>
          <p className="text-gray-500 dark:text-gray-400">Avengers: Endgame</p>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-medium">Asientos</h3>
          <p className="text-gray-500 dark:text-gray-400">A1, A2, A3, B1, B2</p>
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-medium">Precio total</h3>
          <p className="text-gray-500 dark:text-gray-400">$75.00</p>
        </div>
        <Button className="w-full">Comprar boletos</Button>
      </div>
    </div>
  );
};

export default Ticket;