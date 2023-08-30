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
            <MapPinLine size={26} color="#c47f17" />
            <p>
              <span>Endereço de Entrega</span>
              <br />
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </AdressCard>
        <PaymentCard>
          <div>
            <CurrencyDollar size={26} color="#8047f8" />
            <p>
              <span>Pagamento</span>
              <br />O pagamento é feito na entrega. Escolha a como deseja pagar
            </p>
          </div>

          <div>
            <button>
              <CreditCard size={18} color="#8047f8" />
              <p>Cartão de crédito</p>
            </button>
            <button>
              <Bank size={18} color="#8047f8" />
              <p>cartão de débito</p>
            </button>
            <button>
              <Money size={18} color="#8047f8" />
              <p>dinheiro</p>
            </button>
          </div>
        </PaymentCard>
      </div>
    </CartSectionContainer>
  );
}
