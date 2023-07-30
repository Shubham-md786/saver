import { ReactNode } from "react";

interface NavLinkComponent {
  children: ReactNode;
  href: string;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkComponent> = ({
  href,
  isActive,
  className,
  children,
}) => {
  return (
    <li className="mb-1 lg:mb-0">
      <a
        className={`hidden lg:block text-sm drop-shadow-sm ${
          isActive
            ? "text-active font-bold border-b-2 border-blue-500"
            : "text-primary font-semibold"
        } hover:text-active hover:font-bold ${className}`}
        href={href}
      >
        {children}
      </a>
      <a
        className={` lg:hidden p-3 text-sm font-semibold flex gap-3 items-center rounded drop-shadow-sm ${
          isActive ? "bg-blue-50 text-active scale-105" : "text-primary-light"
        } hover:bg-blue-50 hover:text-active hover:scale-105 ${className}`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
