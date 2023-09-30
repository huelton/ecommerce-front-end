import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("com.dsecommerce/Cart", str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem("com.dsecommerce/Cart") || '{ïtems"=[]}';
  return JSON.parse(str);
}
