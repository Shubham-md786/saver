import Image from "next/image";

function Main() {
  return (
    <section id="main" className="">
      <div className="container hero  flex flex-col md:flex-row md:items-center space-y-6">
        <div className="hero-content flex-col w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:order-2">
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
            <div className="mt-6 px-4">
              <a
                href="#"
                className="btn btn-primary flex items-center md:btn-wide"
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
