import CartList from "./components/cartList";
import { CartSectionContainer } from "./style";

export function Cart() {
  return (
    <CartSectionContainer>
      <h2>Cafés selecionados</h2>
      <CartList />
    </CartSectionContainer>
  );
}
