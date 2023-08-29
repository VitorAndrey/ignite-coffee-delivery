import { styled } from "styled-components";

export const CartSectionContainer = styled.section`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;
  display: flex;
  padding: 32px 0;
  gap: 2rem;

  div:nth-child(1) {
    width: 100%;
    max-width: 448px;
  }

  h2 {
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-sm-size"]};
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AdressCard = styled.div``;

export const PaymentCard = styled.div``;
