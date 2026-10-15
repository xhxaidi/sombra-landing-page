import { notFound } from "next/navigation";
import { boards } from "@/components/boards";

// Static per artboard; no loading shell needed.
export const instant = false;

export function generateStaticParams() {
  return Object.keys(boards).map((name) => ({ name }));
}

export default async function Page({ params }) {
  const board = boards[(await params).name];
  if (!board) notFound();
  return <board.Component />;
}
