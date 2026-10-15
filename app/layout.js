import "./globals.css";

export const metadata = {
  title: "Sombra — Trade in the shadow",
  description: "Private trades — post-quantum — Solana-native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,100..900&family=IBM+Plex+Mono:wght@400;500&family=JetBrains+Mono:wght@400;700&family=Rajdhani:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
