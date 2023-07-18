import { styled } from "styled-components";

export const HeroSectionContainer = styled.section`
  min-height: 544px;

  background: ${(props) => props.theme["hero-br-img"]};
  background: cover;
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;

  padding: 5.75rem 0;

  h1 {
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-xl-size"]};
    font-weight: ${(props) => props.theme["title-lg-weight"]};
  }
`;
