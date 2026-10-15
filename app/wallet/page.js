import Wallet from "@/components/Wallet";

export const metadata = { title: "Wallet — Sombra" };

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <Wallet />
    </main>
  );
}
