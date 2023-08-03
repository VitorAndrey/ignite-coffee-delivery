import { CoffeeTag } from "../CoffeeTag";
import { AddToCartContainer, CardContainer, PriceContainer, TagsList } from "./style";

interface CoffeeCardProps {
  item: {
    id: string;
    image: string;
    coffeeName: string;
    tagList: string[];
    description: string;
    price: number;
  };
}

export function CoffeeCard({ item }: CoffeeCardProps) {
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
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </AddToCartContainer>
        <p>Cart</p>
      </PriceContainer>
    </CardContainer>
  );
}
