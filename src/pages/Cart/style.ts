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
  div:nth-child(2) {
    width: 100%;
  }

  h2 {
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-sm-size"]};
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AdressCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  border-radius: 15px;

  div:nth-child(1) {
    display: flex;
  }
`;

export const PaymentCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  border-radius: 15px;

  div:nth-child(1) {
    display: flex;
  }
`;
