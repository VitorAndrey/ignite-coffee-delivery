import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import { Navbar } from "./components/Navbar";
import { AddressContextProvider } from "../../contexts/AddressContext";

export default function DefaultLayout() {
  return (
    <>
      <DefaultLayoutContainer>
        <AddressContextProvider>
          <Navbar />
        </AddressContextProvider>
        <Outlet />
      </DefaultLayoutContainer>
    </>
  );
}
