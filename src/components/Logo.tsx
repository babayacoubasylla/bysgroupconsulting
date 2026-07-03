import logoSrc from "../assets/logo-bys.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10 w-auto sm:h-11" }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="BYS Group Consulting"
      className={className}
    />
  );
}
