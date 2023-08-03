import { styled } from "styled-components";

export const TagContainer = styled.div`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: ${(props) => props.theme["tags-size"]};
  font-family: ${(props) => props.theme["text-family"]};
  font-weight: bold;

  border-radius: 20px;
  padding: 5px 10px;
  text-transform: uppercase;
`;
