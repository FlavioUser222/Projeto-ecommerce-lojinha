import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";

type HeaderProps = {
  titulo: string;
  cardLogo: LucideIcon;
  cardLength: number;
};

export function Header({ titulo, cardLogo: Icon, cardLength }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header>
      <h1>{titulo}</h1>
      <a
        href="#"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <Icon />
        <span>{cardLength}</span>
      </a>
    </header>
  );
}
