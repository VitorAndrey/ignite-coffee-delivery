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

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 16px;

  .inputOne,
  .inputThree,
  .inputFive {
    width: 200px;
  }

  .inputTwo {
    flex: 1;
  }

  .inputFour {
    flex: 1;
  }

  .inputSix {
    flex: 1;
  }

  .inputSeven {
    width: 60px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
  }

  input {
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
  }

  @media screen and (max-width: 550px) {
    .inputOne,
    .inputTwo,
    .inputThree,
    .inputFour,
    .inputFive,
    .inputSix,
    .inputSeven {
      width: 100%;
    }
  }
`;
