export interface Product {
  id?: number;
  img: string;
  nome:string
  valor: number;
}

export interface CartItem extends Product {
  quantity: number;
}
