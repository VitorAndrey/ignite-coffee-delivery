import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
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
        <AdressCard>
          <div>
            <MapPinLine size={32} color="#c47f17" />
            <p>
              <span>Endereço de Entrega</span>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </AdressCard>
        <PaymentCard>
          <div>
            <CurrencyDollar size={32} color="#8047f8" />
            <p>
              <span>Endereço de Entrega</span>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <CreditCard size={32} color="#8047f8" />
          <Bank size={32} color="#8047f8" />
          <Money size={32} color="#8047f8" />
        </PaymentCard>
      </div>
    </CartSectionContainer>
  );
}
