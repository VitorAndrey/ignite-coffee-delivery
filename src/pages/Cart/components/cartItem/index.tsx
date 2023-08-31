import { useContext } from "react";
import { CoffeeType } from "../../../Home/components/MenuSection/components/CoffeeCard";
import { CartContext } from "../../../../contexts/CartContext";
import {
  AddToCartContainer,
  CoffeeImage,
  CartItemContainer,
  AddAndRemoveButton,
  RemoveFromCartContainer,
  ActionsContainer,
  NameAndPriceContainer,
  ContentContainer,
} from "./style";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export default function CartItem({ coffee }: { coffee: CoffeeType }) {
  const { handleAddItem, handleRemoveItem, handleDeleteItem } = useContext(CartContext);

  const itemsPrice = coffee.price * coffee.quantity;

  return (
    <CartItemContainer>
      <CoffeeImage src={coffee.image} />
      <ContentContainer>
        <NameAndPriceContainer>
          <p>{coffee.coffeeName}</p>
          <p>
            {itemsPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </NameAndPriceContainer>
        <ActionsContainer>
          <AddToCartContainer>
            <AddAndRemoveButton onClick={() => handleRemoveItem(coffee)}>
              <Minus size={18} />
            </AddAndRemoveButton>
            <p>{coffee.quantity}</p>
            <AddAndRemoveButton onClick={() => handleAddItem(coffee)}>
              <Plus size={18} />
            </AddAndRemoveButton>
          </AddToCartContainer>
          <RemoveFromCartContainer onClick={() => handleDeleteItem(coffee)}>
            <Trash color="#9A6EF3" />
            <p>Remover</p>
          </RemoveFromCartContainer>
        </ActionsContainer>
      </ContentContainer>
    </CartItemContainer>
  );
}
