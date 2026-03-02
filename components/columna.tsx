"use client";

interface ColumnaProps {
  t: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Columna({ t, value, onChange }: ColumnaProps) {
  return (
    <div
      className={`flex flex-col ${
        t === "Ejercicio" ? "w-[37vw]" : "w-[12vw]"
      }`}
    >
      <input
        type="text"
        maxLength={t === "Ejercicio" ? 30 : 5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t}
        className="border py-2 px-2 text-center outline-none"
      />
    </div>
  );
}
