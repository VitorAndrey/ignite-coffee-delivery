import { CoffeeTag } from "../CoffeeTag";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { AddToCartContainer, CardContainer, PriceContainer, TagsList } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

export interface CoffeeType {
  id: string;
  image: string;
  coffeeName: string;
  tagList: string[];
  description: string;
  price: number;
  quantity?: number;
}

interface CoffeeCardProps {
  item: CoffeeType;
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const { handleAddItem, handleRemoveItem, quantity } = useContext(CartContext);

  const {
    image,
    coffeeName = "Expresso",
    tagList = ["Tradicional", "Com leite"],
    description = "seu expresso delicioso",
    price = 9.99,
  } = item;

  const formattedPrice = String(price).replace(".", ",");

  return (
    <CardContainer>
      <img src={image} alt={coffeeName} />

      <TagsList>
        {tagList.map((tag) => (
          <CoffeeTag key={tag} tag={tag} />
        ))}
      </TagsList>

      <h3>{coffeeName}</h3>

      <p>{description}</p>

      <PriceContainer>
        <p>
          <span>R$</span>
          {formattedPrice}
        </p>
        <AddToCartContainer>
          <div>
            <button onClick={() => handleRemoveItem(item)}>
              <Minus size={18} />
            </button>
            <p>{quantity(coffeeName)}</p>
            <button onClick={() => handleAddItem(item)}>
              <Plus size={18} />
            </button>
          </div>
          <div>
            <ShoppingCart weight="fill" className="w-full" />
          </div>
        </AddToCartContainer>
      </PriceContainer>
    </CardContainer>
  );
}
