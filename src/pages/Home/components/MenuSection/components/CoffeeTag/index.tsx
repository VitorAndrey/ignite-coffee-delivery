import { TagContainer } from "./style";

interface CoffeeTagProps {
  tag: string;
}

export function CoffeeTag({ tag }: CoffeeTagProps) {
  return <TagContainer>{tag}</TagContainer>;
}
