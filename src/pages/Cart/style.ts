import { styled } from "styled-components";

export const CartSectionContainer = styled.section`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;
  display: flex;
  padding: 32px 0;
  gap: 2rem;

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

export const CardSection = styled.div`
  width: 100%;
  max-width: 448px;
`;

export const AdressCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  border-radius: 15px;
  min-height: 372px;
  margin-bottom: 1rem;

  div:nth-child(1) {
    display: flex;
    margin-bottom: 2rem;
  }

  p {
    font-family: ${(props) => props.theme["text-family"]};
    margin-left: 0.8rem;
    font-size: 14px;
  }

  span {
    font-size: 16px;
  }
`;

export const PaymentCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  font-family: ${(props) => props.theme["text-family"]};
  padding: 2rem;
  border-radius: 15px;
  min-height: 207px;

  div:nth-child(1) {
    display: flex;
    margin-bottom: 1.5rem;

    p {
      margin-left: 0.8rem;
      font-size: 14px;
    }

    span {
      font-size: 16px;
    }
  }

  div:nth-child(2) {
    flex: 1;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
  }
`;

type ButtonProps = {
  $activetbn: boolean;
};
export const PaymentButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background: ${(props) => props.theme["base-button"]};
  font-size: 12px;
  text-transform: uppercase;
  width: 178px;
  height: 50px;
  border-radius: 6px;
  border: none;
  ${(props) => props.$activetbn && `border: 1px solid #8f5df7;`}
`;
