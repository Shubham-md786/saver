import Image from "next/image";

function Main() {
  return (
    <section id="main" className="">
      <div className="container hero  flex flex-col lg:flex-row lg:items-center space-y-6 md:space-y-12">
        <div className="hero-content flex-col w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:order-2">
            <h2 className="font-semibold tracking-wide text-active-dark leading-7 text-center lg:text-left">
              Cloud Storage
            </h2>
            <h1 className="text-3xl font-bold tracking-wide text-center text-primary md:text-4xl md:py-3 lg:text-3xl lg:text-left">
              Store and manage everything securely in one place.
            </h1>
            <p className="mt-4 text-primary text-center lg:text-left">
              CypherVault provides a premium design and features to help you
              securely store and access all your digital assets in one place
            </p>
            <div className="mt-6 px-4">
              <a
                href="#"
                className="btn btn-primary flex items-center lg:btn-wide"
              >
                Get Started For Free
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
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
