import CartList from "./components/cartList";
import { AdressCard, CartSectionContainer, PaymentCard } from "./style";

export function Cart() {
  return (
    <CartSectionContainer>
      <div>
        <h2>Cafés selecionados</h2>
        <CartList />
      </div>
      <div>
        <h2>Complete seu pedido</h2>
        <AdressCard />
        <PaymentCard />
      </div>
    </CartSectionContainer>
  );
}
