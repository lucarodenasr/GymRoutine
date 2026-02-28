"use client";

interface ColumnaProps {
  t: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Columna({ t, value, onChange }: ColumnaProps) {
  return (
    <div
      className={`flex flex-col border p-2 ${
        t === "Ejercicio" ? "w-70" : "w-30"
      }`}
    >
      <input
        type="text"
        maxLength={t === "Ejercicio" ? 30 : 9}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t}
        className="py-1 text-center outline-none"
      />
    </div>
  );
}