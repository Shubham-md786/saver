import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="mt-14 lg:my-24">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
