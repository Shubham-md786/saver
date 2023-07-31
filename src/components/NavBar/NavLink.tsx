import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface NavLinkComponent {
  children: ReactNode;
  onOpen?: Dispatch<SetStateAction<boolean>>;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkComponent> = ({
  href,
  onOpen,
  className,
  children,
}) => {
  const router = useRouter();

  return (
    <li className="mb-1 lg:mb-0">
      <Link
        className={`hidden lg:block text-sm drop-shadow-sm ${
          router.pathname === href
            ? "text-active font-bold border-b-2 border-blue-500"
            : "text-primary font-semibold"
        } hover:text-active hover:font-bold ${className}`}
        href={href}
      >
        {children}
      </Link>
      {onOpen && (
        <Link
          className={` lg:hidden p-3 text-sm font-semibold flex gap-3 items-center rounded drop-shadow-sm ${
            router.pathname === href
              ? "bg-blue-50 text-active scale-105"
              : "text-primary-light"
          } hover:bg-blue-50 hover:text-active hover:scale-105 ${className}`}
          href={href}
          onClick={() => onOpen(false)}
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default NavLink;
