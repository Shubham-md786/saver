import Features from "@/components/Home/Features";
import Logos from "@/components/Home/Logos";
import Main from "@/components/Home/Main";
import NewsLetter from "@/components/Home/NewsLetter";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

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
      <Main />
      <Features />
      <Logos />
      <Stats />
      <Testimonials />
      <NewsLetter />
    </>
  );
}
