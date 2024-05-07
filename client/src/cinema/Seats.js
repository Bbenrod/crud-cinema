export default function Seats() {
    return (
      <div className="seats-container">
        <h2>Selecciona tus asientos</h2>
        <div className="grid grid-cols-6 gap-2" />
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Asientos seleccionados:</h3>
          <div className="grid grid-cols-5 gap-2">
            <button>A1</button>
            <button>A2</button>
            <button>A3</button>
            <button>B1</button>
            <button>B2</button>
          </div>
        </div>
      </div>
    );
  }  