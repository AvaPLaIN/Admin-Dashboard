import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  transition: all 0.2s ease-in-out;
`;
