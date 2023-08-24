import { CardListContainer, ConfirmButton, ListContainer, TotalContainer } from "./style";

import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CartItem from "../cartItem";

export default function CartList() {
  const { cartList, totalItemsPrice = 0 } = useContext(CartContext);

  return (
    <CardListContainer>
      <ListContainer>
        {cartList.length > 0 ? (
          cartList.map((coffee, index) => <CartItem coffee={coffee} key={index} />)
        ) : (
          <p>Nada no carrinho</p>
        )}
      </ListContainer>

      <TotalContainer>
        <p>
          Total de itens{" "}
          <span>
            {totalItemsPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <p>
          Total{" "}
          <span>
            {(totalItemsPrice + 3.5).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </TotalContainer>
      <ConfirmButton>Confirmar Pedido</ConfirmButton>
    </CardListContainer>
  );
}
