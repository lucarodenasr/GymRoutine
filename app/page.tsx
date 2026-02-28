import "./globals.css";
import Routine from "@/components/routine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Routine />
    </main>
  );
}
