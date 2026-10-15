import Link from "next/link";
import { boards } from "@/components/boards";

export const metadata = { title: "Artboards — Sombra" };

// Every artboard from the original design canvas, including explorations.
export default function Page() {
  return (
    <main style={{ padding: 40, color: "#f2efe9", fontFamily: "'IBM Plex Mono', monospace" }}>
      <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>Artboards</h1>
      <ul style={{ lineHeight: 2 }}>
        {Object.entries(boards).map(([name, b]) => (
          <li key={name}><Link href={`/boards/${name}`}>{b.title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
