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
import emptyCart from "../../../../../public/emptyCart.png";

export default function CartList() {
  const { cartList, totalItemsPrice = 0 } = useContext(CartContext);

  const hasItems = cartList.length > 0;

  console.log(hasItems);

  return (
    <CardListContainer>
      <ListContainer>
        {cartList.length > 0 ? (
          cartList.map((coffee, index) => <CartItem coffee={coffee} key={index} />)
        ) : (
          <EmptyCartImage src={emptyCart} />
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
      <ConfirmButton disabled={!hasItems}>
        <Link to={"/seccessfulpurchase"}>Confirmar Pedido</Link>
      </ConfirmButton>
    </CardListContainer>
  );
}
