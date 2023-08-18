import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeType } from "../pages/Home/components/MenuSection/components/CoffeeCard";

interface CartContextType {
  cartList: CoffeeType[];
  handleAddItem: (item: CoffeeType) => void;
  handleRemoveItem: (item: CoffeeType) => void;
  quantity: (coffeeName: string) => number;
  handleDeleteItem: (item: CoffeeType) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartList, setCartList] = useState<CoffeeType[]>([]);

  function handleAddItem(item: CoffeeType) {
    const alreadyInCartItem = cartList.find((cartItem) => cartItem.coffeeName === item.coffeeName);

    setCartList((prevState) => {
      if (alreadyInCartItem) {
        const updatedCartList = prevState.map((cartItem) => {
          if (cartItem.coffeeName === alreadyInCartItem.coffeeName) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return updatedCartList;
      } else {
        return [...prevState, { ...item, quantity: 1 }];
      }
    });
  }

  function handleRemoveItem(item: CoffeeType) {
    const alreadyInCartItem = cartList.find((cartItem) => cartItem.coffeeName === item.coffeeName);

    setCartList((prevState) => {
      if (alreadyInCartItem && alreadyInCartItem.quantity > 1) {
        const updatedCartList = prevState.map((cartItem) => {
          if (cartItem.coffeeName === alreadyInCartItem.coffeeName) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });

        return updatedCartList;
      } else {
        return prevState.filter((prevItem) => prevItem.id !== item.id);
      }
    });
  }

  function handleDeleteItem(item: CoffeeType) {
    setCartList((prevState) => prevState.filter((prevItem) => prevItem.id !== item.id));
  }

  function quantity(coffeName: string) {
    const alreadyInCartItem = cartList.find((cartItem) => cartItem.coffeeName === coffeName);

    if (alreadyInCartItem) {
      return alreadyInCartItem?.quantity;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, handleAddItem, handleRemoveItem, quantity, handleDeleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
