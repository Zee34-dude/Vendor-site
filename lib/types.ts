export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  emoji?: string;
  category: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  product: string;
  productId: string;
  quantity: number;
  total: number;
  timestamp: string;
  status: "pending" | "confirmed" | "completed";
  note?: string;
}
