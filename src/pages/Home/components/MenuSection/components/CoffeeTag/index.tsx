interface CoffeeTagProps {
  tag: string;
}

export function CoffeeTag({ tag }: CoffeeTagProps) {
  return <div> {tag} </div>;
}
