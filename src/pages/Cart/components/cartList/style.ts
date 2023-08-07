import { styled } from "styled-components";

export const CardListContainer = styled.div`
  max-width: 448px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 6px 44px;

  background: ${(props) => props.theme["base-card"]};
  font-family: ${(props) => props.theme["text-family"]};

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p:nth-child(1),
  p:nth-child(2) {
    font-size: ${(props) => props.theme["text-xs-size"]};
  }

  p:nth-child(3) {
    font-size: ${(props) => props.theme["text-sm-size"]};
    font-weight: ${(props) => props.theme["text-md-weight-bold"]};
  }

  button {
    background: ${(props) => props.theme["yellow-default"]};
    color: white;
    border: none;
    padding: 5px;
    font-size: ${(props) => props.theme["button-md-size"]};
    border-radius: 6px;
  }
`;
