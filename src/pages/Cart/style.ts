import { styled } from "styled-components";

export const CartSectionContainer = styled.section`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;

  padding: 32px 0;

  h2 {
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-sm-size"]};
  }
`;
