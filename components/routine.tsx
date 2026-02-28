"use client";

import { useEffect, useState } from "react";
import Dia from "./dia";

interface Fila {
  ejercicio: string;
  series: string;
  repeticiones: string;
}

interface DiaType {
  id: string;
  titulo: string;
  filas: Fila[];
}

export default function Routine() {
  const [dias, setDias] = useState<DiaType[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("routineData");

    if (saved) {
      setDias(JSON.parse(saved));
    } else {
      setDias([
        {
          id: crypto.randomUUID(),
          titulo: "DIA 1",
          filas: [{ ejercicio: "", series: "", repeticiones: "" }],
        },
      ]);
    }

    setLoaded(true);
  }, []);

  // Guardar automáticamente
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("routineData", JSON.stringify(dias));
    }
  }, [dias, loaded]);

  if (!loaded) return null;

  const agregarDia = () => {
    setDias([
      ...dias,
      {
        id: crypto.randomUUID(),
        titulo: `DIA ${dias.length + 1}`,
        filas: [{ ejercicio: "", series: "", repeticiones: "" }],
      },
    ]);
  };

  const eliminarDia = (id: string) => {
    setDias(dias.filter((dia) => dia.id !== id));
  };

  const actualizarTitulo = (id: string, value: string) => {
    setDias(
      dias.map((dia) =>
        dia.id === id ? { ...dia, titulo: value } : dia
      )
    );
  };

  const agregarFila = (id: string) => {
    setDias(
      dias.map((dia) =>
        dia.id === id
          ? {
              ...dia,
              filas: [
                ...dia.filas,
                { ejercicio: "", series: "", repeticiones: "" },
              ],
            }
          : dia
      )
    );
  };

  const eliminarFila = (id: string, idx: number) => {
    setDias(
      dias.map((dia) =>
        dia.id === id
          ? {
              ...dia,
              filas: dia.filas.filter((_, i) => i !== idx),
            }
          : dia
      )
    );
  };

  const actualizarFila = (
    diaId: string,
    filaIdx: number,
    campo: "ejercicio" | "series" | "repeticiones",
    valor: string
  ) => {
    setDias(
      dias.map((dia) =>
        dia.id === diaId
          ? {
              ...dia,
              filas: dia.filas.map((fila, i) =>
                i === filaIdx ? { ...fila, [campo]: valor } : fila
              ),
            }
          : dia
      )
    );
  };

  return (
    <div className="space-y-6 p-6 flex flex-col items-center">
      {dias.map((dia) => (
        <Dia
          key={dia.id}
          {...dia}
          actualizarTitulo={actualizarTitulo}
          agregarFila={agregarFila}
          eliminarFila={eliminarFila}
          eliminarDia={eliminarDia}
          actualizarFila={actualizarFila}
        />
      ))}

      <button
        onClick={agregarDia}
        className="w-12 h-12 flex items-center justify-center text-white font-bold text-2xl rounded-full shadow bg-gray-900"
      >
        +
      </button>
    </div>
  );
}