interface CardProps {
  img: string;
  nome: string;
  valor: number;
  onAdd(): void;
}

export function Card({ img, nome, valor, onAdd }: CardProps) {
  return (
    <div className="card" onClick={onAdd}>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <h1>{nome}</h1>
        <p>{valor}R$</p>
      </div>
    </div>
  );
}
