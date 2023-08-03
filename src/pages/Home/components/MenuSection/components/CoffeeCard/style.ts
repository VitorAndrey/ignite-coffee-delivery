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

  h3 {
    font-family: "${(props) => props.theme["title-family"]}";
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  p {
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["text-lg-size"]};

    span {
      font-size: 10px;
      font-weight: 400;
      font-family: ${(props) => props.theme["text-family"]};
      margin-right: 3px;
    }
  }
`;

export const TagsList = styled.div`
  display: flex;
  gap: 5px;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  div:nth-child(1) {
    background: #e6e5e5;
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0 3px;
    height: 2rem;
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["purple-dark"]};
    color: #fff;
    height: 2rem;
    width: 2rem;
    padding: 0 3px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme["purple-default"]};
    padding: 3px 6px;
    cursor: pointer;
  }

  p {
    font-family: ${(props) => props.theme["text-family"]};
    font-size: ${(props) => props.theme["text-xs-size"]};
  }
`;
