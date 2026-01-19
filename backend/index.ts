import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();

await app.register(cors, {
  origin: true,
});

interface Product {
  id: number;
  img: string;
  nome: string;
  valor: number;
}

interface CartItems {
  id: number;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    img: "teste",
    nome: "Teste",
    valor: 30,
  },
  {
    id: 2,
    img: "teste",
    nome: "Teste",
    valor: 30,
  },
  {
    id: 3,
    img: "teste",
    nome: "Teste",
    valor: 30,
  },
  {
    id: 4,
    img: "teste",
    nome: "Teste",
    valor: 30,
  },
];

let productsOnCart: CartItems[] = []

app.get("/products", (request, reply) => {
  return reply.send(products);
});

app.post<{ Body: Product }>("/products", (request, reply) => {
  const { id, img, nome, valor } = request.body;
  const newProduct = products.push({ id, img, nome, valor });
  reply.status(201).send();
});

app.get('/cart', (request, reply) => {
  return reply.send(productsOnCart)
})

app.post<{ Body: CartItems }>("/cart", (request, reply) => {
  const { id, quantity } = request.body;

  let findProduct = productsOnCart.find(produto => produto.id == id)

  if (findProduct) {
    findProduct.quantity += quantity
  } else {
    productsOnCart.push({ id, quantity })

  }

  reply.status(201).send()
})


app.listen({
  port: 3000,
});
