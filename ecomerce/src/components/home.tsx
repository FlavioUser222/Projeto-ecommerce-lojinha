import { useState } from "react";
import type { CartItem, Product } from "../types/product";
import { Header } from "./header";
import { ShoppingBag } from "lucide-react";
import { Card } from "./cardComponent";
import { useProducts } from "../hooks/useProducts";

export function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const products: Product[] = useProducts();
  const dataCart = JSON.parse(localStorage.getItem("cart-items") || "");

  function addProduct(product: Product) {
    const newCart = [...cartItems];
    const findDuplicates = newCart.find((item) => item.id === product.id);

    if (findDuplicates) {
      findDuplicates.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCartItems(newCart);
    localStorage.setItem("cart-items", JSON.stringify(newCart));
  }
  const totalIems = dataCart?.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0
  );

  return (
    <>
      <Header
        titulo="Loja Roupas"
        cardLogo={ShoppingBag}
        cardLength={totalIems}
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
                addProduct(product);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
