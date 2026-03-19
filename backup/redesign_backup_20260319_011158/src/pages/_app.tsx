import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-outfit: ${outfit.style.fontFamily};
        }
      `}</style>
      <main className={`${outfit.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
