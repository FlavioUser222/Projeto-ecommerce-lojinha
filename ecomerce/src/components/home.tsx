import type { Product } from "../types/product";
import { Header } from "./header";
import { ShoppingBag } from "lucide-react";
import { Card } from "./cardComponent";
import { useProducts } from "../hooks/useProducts";
import axios from "axios";


export function Home() {
  const products: Product[] = useProducts();

  async function addProduct(id: number) {
    try {
      let quantity = 1
      let res = await axios.post('http://localhost:3000/cart', { id, quantity })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Header
        titulo="Loja Roupas"
        cardLogo={ShoppingBag}
        cardLength={1}
      ></Header>

      <div className="container">
        <div className="card-container">
          {products?.map((product: Product) => (
            <Card
              key={product.id}
              img={product.img}
              nome={product.nome}
              valor={product.valor}
              onAdd={() => {
                addProduct(product.id);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
