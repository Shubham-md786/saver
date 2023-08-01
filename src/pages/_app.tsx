import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="mt-24 lg:mt-30 mx-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
