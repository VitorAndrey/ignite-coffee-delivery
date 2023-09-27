import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  CartIcon,
  MapIcon,
  NavbarContainer,
  NavigationContainer,
} from "./styles";

import { useContext } from "react";
import { AddressContext } from "../../../../contexts/AddressContext";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";

export function Navbar() {
  const { address } = useContext(AddressContext);
  const { cartList } = useContext(CartContext);

  return (
    <NavbarContainer>
      <Link to="/">
        <img src="/Logo.png" alt="Logo" />
      </Link>

      <Link to="/cart">
        <NavigationContainer>
          <MapIcon>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>
              {address.city}, {address.uf}
            </span>
          </MapIcon>

          <CartIcon>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            <span>{cartList.length}</span>
          </CartIcon>
        </NavigationContainer>
      </Link>
    </NavbarContainer>
  );
}
