import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartIcon, MapIcon, NavbarContainer, NavigationContainer } from "./styles";

export function Navbar() {
  return (
    <NavbarContainer>
      <a href="/">
        <img src="/Logo.png" alt="Logo" />
      </a>

      <a href="/cart">
        <NavigationContainer>
          <MapIcon>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>Porto Alegre, RS</span>
          </MapIcon>

          <CartIcon>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            <span>3</span>
          </CartIcon>
        </NavigationContainer>
      </a>
    </NavbarContainer>
  );
}
