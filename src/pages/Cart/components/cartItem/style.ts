import { styled } from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #e6e5e5;
  width: max-content;
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
`;

export const RemoveFromCartContainer = styled.button`
  display: flex;
  align-items: center;
  background: #e6e5e5;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  gap: 0.3rem;
  text-transform: uppercase;
  cursor: pointer;
  p {
    font-size: 14px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffeeImage = styled.img`
  width: 64px;
`;

export const AddAndRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: ${(props) => props.theme["purple-default"]};
  cursor: pointer;
`;
