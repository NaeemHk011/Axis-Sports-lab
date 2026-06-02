import { useTheme } from "next-themes";

interface Props {
  className?: string;
  alt?: string;
}

const Logo = ({ className = "h-12 w-auto", alt = "Axis Sports Lab basketball training" }: Props) => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "light" 
    ? "/Axis Sports Lab - logo design - black.png" 
    : "/Axis Sports Lab - logo design - White.png";

  return (
    <img src={logoSrc} alt={alt} className={className} loading="eager" decoding="async" />
  );
};

export default Logo;
