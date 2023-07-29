import BlueButton from "@/components/Buttons/BlueButton";
import {
  CloudArrowUpIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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
    icon: IdentificationIcon,
  },
  {
    name: "Personalization",
    description:
      "Store and manage your projects, website URLs, images, passwords, IDs, and social media posts securely in one personalized hub. Enjoy seamless organization tailored to your needs with advanced data encryption. Simplify your digital life with us!",
    icon: UserIcon,
  },
];

const stats = [
  {
    data: "35K",
    title: "Customers",
  },
  {
    data: "10K+",
    title: "Downloads",
  },
  {
    data: "40+",
    title: "Countries",
  },
  {
    data: "30M+",
    title: "Total revenue",
  },
];

const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Martin escobar",
    title: "Founder of meta",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Angela stian",
    title: "Product designer",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Karim ahmed",
    title: "DevOp engineer",
    quote:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div className="container hero flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-12 md:mb-10 md:flex-row md:items-center md:space-x-6">
          <div className="hero-content mx-2 flex-col w-full md:flex-row md:w-1/2">
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
      </main>
      <section className="bg-white py-8 sm:py-12">
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
      </section>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our customers are always happy
            </h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-4xl text-indigo-600 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              See what others saying about us
            </h3>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
              magna lorem, euismod volutpat arcu volutpat et.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700">{item.quote}</p>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
