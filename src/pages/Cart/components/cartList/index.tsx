import {
  CardListContainer,
  ConfirmButton,
  EmptyCartImage,
  ListContainer,
  TotalContainer,
} from "./style";

import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CartItem from "../cartItem";
import { Link } from "react-router-dom";

export default function CartList() {
  const { cartList } = useContext(CartContext);
  const hasItems = cartList.length > 0;
  const delivery = cartList.length > 0 ? 3.5 : 0;

  let totalItemsPrice = 0;

  cartList.map((coffee) => {
    totalItemsPrice += coffee.price * coffee.quantity;
  });

  return (
    <CardListContainer>
      <ListContainer>
        {cartList.length > 0 ? (
          cartList.map((coffee, index) => <CartItem coffee={coffee} key={index} />)
        ) : (
          <EmptyCartImage src="/emptyCart.png" />
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
          Entrega{" "}
          <span>
            {delivery.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <p>
          Total{" "}
          <span>
            {(totalItemsPrice + delivery).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </TotalContainer>
      <ConfirmButton disabled={!hasItems}>
        <Link to={"/seccessfulpurchase"}>Confirmar Pedido</Link>
      </ConfirmButton>
    </CardListContainer>
  );
}
