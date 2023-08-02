import { menuList } from "../../../../data/Menulist";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer, MenuSectionContainer } from "./style";

export function MenuSection() {
  return (
    <MenuSectionContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListContainer>
        {menuList.map((menuItem) => (
          <CoffeeCard item={menuItem} key={menuItem.id} />
        ))}
      </CoffeeListContainer>
    </MenuSectionContainer>
  );
}
