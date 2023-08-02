import { CoffeeTag } from "../CoffeeTag";
import { CardContainer, PriceContainer, TagsList } from "./style";

interface CoffeeCardProps {
  item: {
    id: string;
    image: string;
    coffeeName: string;
    tagList: string[];
    description: string;
  };
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const {
    image,
    coffeeName = "Expresso",
    tagList = ["Tradicional", "Com leite"],
    description = "seu expresso delicioso",
  } = item;

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
          <span>R$</span>9,99
        </p>
        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <p>Cart</p>
      </PriceContainer>
    </CardContainer>
  );
}
