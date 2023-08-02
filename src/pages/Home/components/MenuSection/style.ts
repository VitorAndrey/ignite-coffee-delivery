import { styled } from "styled-components";

export const MenuSectionContainer = styled.section`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;

  h2 {
    margin-bottom: 54px;
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-lg-size"]};
    font-weight: ${(props) => props.theme["title-lg-weight"]};
  }
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
