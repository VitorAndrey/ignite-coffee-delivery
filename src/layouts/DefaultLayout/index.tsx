import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import { Navbar } from "./components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <DefaultLayoutContainer>
        <Navbar />
        <Outlet />
      </DefaultLayoutContainer>
    </>
  );
}
