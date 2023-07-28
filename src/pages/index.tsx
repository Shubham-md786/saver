import BlueButton from "@/components/Buttons/BlueButton";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Blazing Fast Speed",
    description:
      "Experience blazing fast cloud speeds for effortless file management, project handling, and seamless exploration of our platform's features. Enjoy unparalleled efficiency and reliability with us today!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Advanced security",
    description:
      "Your data's security is our top priority. Our website utilizes advanced encryption and industry-leading protocols to ensure comprehensive protection from unauthorized access.",
    icon: LockClosedIcon,
  },
  {
    name: "Easy Access",
    description:
      "Effortlessly access your data on our user-friendly website. With a simple interface, managing your information is a breeze. Enjoy the convenience of seamless data access and focus on what matters most.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-12 md:mb-10 md:flex-row md:items-center md:space-x-6">
          <div className="flex mx-2 flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-bold tracking-wide text-center text-primary md:text-3xl md:text-left">
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
      </main>
      <div className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-bold leading-7 text-active-dark">
              Full Security
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-3xl">
              Everything you need to Store
            </p>
            <p className="mt-6 text-lg leading-8 text-primary">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-button-primary-dark">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-primary font-semibold">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-primary-light">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
