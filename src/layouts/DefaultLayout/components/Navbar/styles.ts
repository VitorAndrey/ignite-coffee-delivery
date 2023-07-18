import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;

  img {
    width: 5.3rem;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  padding: 8px;

  span {
    display: none;

    color: ${(props) => props.theme["purple-dark"]};

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;
export const CartIcon = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  padding: 8px;

  margin-right: 8px;

  span {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;

    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white-default"]};
    font-size: ${(props) => props.theme["text-xs-size"]};
    border-radius: 100%;
  }
`;
