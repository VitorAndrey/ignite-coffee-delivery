import { ReactNode, createContext, useState } from "react";

type Address = {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: "debit" | "credit" | "cash";
};

interface AddressContextType {
  address: Address;
  updateAddres: (address: Address) => void;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<Address>({
    cep: "35501043",
    city: "Divinópolis",
    neighborhood: "Manoel Valinhos",
    number: 54,
    street: "Rua das margaridas",
    uf: "RJ",
    paymentMethod: "cash",
  });

  function updateAddres(address: Address) {
    setAddress(address);
  }

  return (
    <AddressContext.Provider value={{ address, updateAddres }}>
      {children}
    </AddressContext.Provider>
  );
}
