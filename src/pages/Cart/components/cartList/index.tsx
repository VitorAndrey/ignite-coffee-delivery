import { CardListContainer, ConfirmButton, ListContainer, TotalContainer } from "./style";

import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CartItem from "../cartItem";

export default function CartList() {
  const { cartList } = useContext(CartContext);

  return (
    <CardListContainer>
      <ListContainer>
        {cartList && cartList.map((coffee, index) => <CartItem coffee={coffee} key={index} />)}
      </ListContainer>

      <TotalContainer>
        <p>
          Total de itens <span>R$ 29,70</span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <p>
          Total <span>R$ 33,20</span>
        </p>
      </TotalContainer>
      <ConfirmButton>Confirmar Pedido</ConfirmButton>
    </CardListContainer>
  );
}
