import fs from "fs";
import path from "path";
import { Order } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "orders.json");

function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

export function getOrders(): Order[] {
  ensureFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Order[];
}

export function addOrder(order: Order): void {
  ensureFile();
  const orders = getOrders();
  orders.unshift(order); // newest first
  fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2), "utf-8");
}

export function updateOrderStatus(id: string, status: Order["status"]): boolean {
  ensureFile();
  const orders = getOrders();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return false;
  orders[idx].status = status;
  fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2), "utf-8");
  return true;
}
