import "./globals.css";
import Routine from "@/components/routine";

export default function Home() {
  return (
    <main className="flex min-h-screen mt-20 w-full flex-col items-center justify-between overflow-hidden">
      <Routine />
    </main>
  );
}
