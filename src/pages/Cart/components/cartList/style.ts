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

  @media screen and (max-width: 425px) {
    padding: 2rem 0.8rem;
  }
`;

export const ConfirmButton = styled.button`
  background: ${(props) => props.theme["yellow-default"]};
  color: white;
  border: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.6rem 0;
  margin: 0 1rem;
  cursor: pointer;
  font-size: ${(props) => props.theme["button-md-size"]};
  border-radius: 6px;

  a {
    color: white;
  }
`;

export const DisabledButton = styled.button`
  background: ${(props) => props.theme["yellow-light"]};
  color: white;
  border: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.6rem 0;
  margin: 0 1rem;
  cursor: not-allowed;
  font-size: ${(props) => props.theme["button-md-size"]};
  border-radius: 6px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyCartImage = styled.div`
  max-width: 200px;
  height: 200px;
  width: 100%;

  img {
    width: 100%;
  }
`;
