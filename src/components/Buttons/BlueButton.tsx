import { ReactNode } from "react";

interface BlueButton {
  children: ReactNode;
  className?: string;
  href: string;
}

const BlueButton: React.FC<BlueButton> = ({ children, className, href }) => {
  return (
    <a
      href={href}
      className={`py-2 px-5 bg-button-primary text-center text-sm transition-colors duration-200 transform text-secondary font-semibold drop-shadow-md hover:bg-button-primary-hover rounded-md ${className}`}
    >
      {children}
    </a>
  );
};

export default BlueButton;
