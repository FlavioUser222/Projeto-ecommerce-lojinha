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

app.get("/products", (request, reply) => {
  return reply.send(products);
});

app.post<{ Body: Product }>("/products", (request, reply) => {
  const { id, img, nome, valor } = request.body;
  const newProduct = products.push({ id, img, nome, valor });
  reply.status(201).send();
});




app.listen({
  port: 3000,
});
