import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 14px;

  width: 100%;
  max-width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  padding: 1rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    margin-top: -40px;
    width: 120px;
    height: 120px;
  }

  p:first-child {
  }
`;

export const PriceContainer = styled.div`
  display: flex;

  span {
    font-size: 10px;
  }
`;

export const TagsList = styled.div`
  display: flex;
`;

export const AddToCartContainer = styled.div`
  display: flex;
`;
