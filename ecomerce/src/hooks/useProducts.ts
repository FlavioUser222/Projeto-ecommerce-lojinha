import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProducts() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  async function fetchProducts() {
    try {
      const res = await axios.get("http://localhost:3000/products");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data)

  return data;
}
