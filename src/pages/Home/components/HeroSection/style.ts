import { styled } from "styled-components";

export const HeroSectionContainer = styled.section`
  min-height: 544px;
  width: 100%;

  background: ${(props) => props.theme["hero-br-img"]};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 3rem;

  padding: 5.75rem 0;

  @media screen and (max-width: 705px) {
    flex-direction: column;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  h1 {
    max-width: 588px;
    font-family: "${(props) => props.theme["title-family"]}";
    font-size: ${(props) => props.theme["title-xl-size"]};
    font-weight: ${(props) => props.theme["title-lg-weight"]};
  }

  p {
    max-width: 480px;
    font-family: "${(props) => props.theme["text-family"]}";
    font-size: ${(props) => props.theme["base-text"]};
    font-weight: ${(props) => props.theme["text-md-weight-regular"]};
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    width: 100%;
    max-width: 476px;
  }

  @media screen and (max-width: 705px) {
    justify-content: center;
  }
`;
