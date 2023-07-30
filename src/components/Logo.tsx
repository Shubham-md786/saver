interface Logo {
  className?: string;
}

const Logo: React.FC<Logo> = ({ className }) => {
  return (
    <>
      <span className="sr-only">CypherVault</span>
      <h1
        className={`text-primary drop-shadow-md text-2xl font-bold leading-none ${className}`}
      >
        CypherVault
      </h1>
    </>
  );
};

export default Logo;
