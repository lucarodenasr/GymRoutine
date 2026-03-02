"use client";

import Columna from "./columna";

interface Fila {
  ejercicio: string;
  series: string;
  repeticiones: string;
}

interface DiaProps {
  id: string;
  titulo: string;
  filas: Fila[];
  actualizarTitulo: (id: string, value: string) => void;
  agregarFila: (id: string) => void;
  eliminarFila: (id: string, filaIdx: number) => void;
  eliminarDia: (id: string) => void;
  actualizarFila: (
    diaId: string,
    filaIdx: number,
    campo: "ejercicio" | "series" | "repeticiones",
    valor: string,
  ) => void;
}

export default function Dia({
  id,
  titulo,
  filas,
  actualizarTitulo,
  agregarFila,
  eliminarFila,
  eliminarDia,
  actualizarFila,
}: DiaProps) {
  return (
    <div className="flex flex-col w-full mx-auto shadow pl-5">
      <div className="flex items-center">
        <input
          type="text"
          value={titulo}
          maxLength={44}
          onChange={(e) => actualizarTitulo(id, e.target.value)}
          className="border w-[61vw] py-2 text-center outline-none font-bold"
        />
        <button
          onClick={() => eliminarDia(id)}
          className="w-8 h-8 ml-2 flex items-center justify-center text-white font-bold text-lg rounded-full shadow bg-gray-900 active:scale-95 transition"
        >
          -
        </button>
      </div>
      {filas.map((fila, idx) => (
        <div key={idx} className="flex items-center w-full">
          <Columna
            t="Ejercicio"
            value={fila.ejercicio}
            onChange={(val) => actualizarFila(id, idx, "ejercicio", val)}
          />
          <Columna
            t="Series"
            value={fila.series}
            onChange={(val) => actualizarFila(id, idx, "series", val)}
          />
          <Columna
            t="Reps"
            value={fila.repeticiones}
            onChange={(val) => actualizarFila(id, idx, "repeticiones", val)}
          />

          <button
            onClick={() => eliminarFila(id, idx)}
            className="w-8 h-8 ml-2 flex items-center justify-center text-white font-bold text-sm rounded-full shadow bg-gray-900 active:scale-95 transition"
          >
            -
          </button>
        </div>
      ))}
      <button
        onClick={() => agregarFila(id)}
        className="w-8 h-8 mt-2 self-center flex items-center justify-center text-white font-bold text-xl rounded-full shadow bg-gray-900 active:scale-95 transition"
      >
        +
      </button>
    </div>
  );
}
