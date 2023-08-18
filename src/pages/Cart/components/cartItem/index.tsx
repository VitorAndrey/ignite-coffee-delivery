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
} from "./style";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export default function CartItem({ coffee }: { coffee: CoffeeType }) {
  const { handleAddItem, handleRemoveItem, handleDeleteItem } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CoffeeImage src={coffee.image} />
      <div>
        {coffee.coffeeName}
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
      </div>
    </CartItemContainer>
  );
}
