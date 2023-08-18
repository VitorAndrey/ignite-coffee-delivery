import { ReactNode, createContext } from "react";

interface AddressContextType {
  address: string;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({ children }: { children: ReactNode }) {
  const address = "Divinópolis, MG";

  return <AddressContext.Provider value={{ address }}>{children}</AddressContext.Provider>;
}
