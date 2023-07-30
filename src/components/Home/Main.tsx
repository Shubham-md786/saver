import Image from "next/image";

function Main() {
  return (
    <section>
      <div className="container hero flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-12 md:mb-10 md:flex-row md:items-center md:space-x-6">
        <div className="hero-content mx-2 flex-col w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h2 className="font-semibold tracking-wide text-active-dark leading-7 text-center md:text-left">
              Cloud Storage
            </h2>
            <h1 className="text-3xl font-bold tracking-wide text-center text-primary md:text-left">
              Store and manage everything securely in one place.
            </h1>
            <p className="mt-4 text-primary text-center md:text-left">
              CypherVault provides a premium design and features to help you
              securely store and access all your digital assets in one place
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="btn btn-primary flex items-center px-3 py-2 md:inline"
              >
                Get Started For Free
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <Image
            className="object-cover w-full h-full max-w-2xl rounded-md"
            width={1}
            sizes="(max-width: 768px) 100vw"
            height={1}
            priority
            src="/images/2.png"
            quality={100}
            alt="Main Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
