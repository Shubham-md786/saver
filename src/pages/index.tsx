import BlueButton from "@/components/Buttons/BlueButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex mx-2 flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-center text-primary md:text-3xl md:text-left">
              Store and manage everything securely in one place.
            </h1>
            <p className="mt-4 text-primary text-center md:text-left">
              CypherVault provides a premium design and features to help you
              securely store and access all your digital assets in one place
            </p>
            <div className="mt-6">
              <BlueButton href="#" className="block px-3 py-2 md:inline">
                Get Started For Free
              </BlueButton>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
