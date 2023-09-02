import { styled } from "styled-components";

export const SuccessfulContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1120px;

  margin: 3rem auto;

  font-family: ${(props) => props.theme["text-family"]};

  h2 {
    font-family: "${(props) => props.theme["title-family"]}";
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const ImageConteiner = styled.div`
  flex: 1;
  max-width: 492px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  border-radius: 6px 36px;
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  div {
    display: flex;
    gap: 1rem;

    span {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      display: grid;
      place-items: center;
    }
  }
`;

export const PurpleSpan = styled.span`
  background: ${(props) => props.theme["purple-default"]};
`;
export const YellowSpan = styled.span`
  background: ${(props) => props.theme["yellow-default"]};
`;

export const DarkYellowSpan = styled.span`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const Gradient = styled.div`
  flex: 1;
  border-radius: 6px 36px;
  background: linear-gradient(135deg, #dbac2c, #8047f8);
  padding: 1px;
  max-width: 526px;
`;
