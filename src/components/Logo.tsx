interface Logo {
  className?: string;
}

const Logo: React.FC<Logo> = ({ className }) => {
  return (
    <>
      <span className="sr-only">CypherVault</span>
      <h1 className={`text-primary drop-shadow-md ${className}`}>
        CypherVault
      </h1>
    </>
  );
};

export default Logo;
