import styled from "styled-components";

export const MainContainer = styled.div`
  flex: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  .main-font-color {
    color: ${(props) => props.theme.font.main};
  }

  .secondary-font-color {
    color: ${(props) => props.theme.font.secondary};
  }

  .secondary-bg-color {
    height: 5rem;
    width: 15rem;
    background-color: ${(props) => props.theme.background.secondary};
    box-shadow: ${(props) => props.theme.shadows.secondary};
  }

  .tertiary-bg-color {
    height: 5rem;
    width: 15rem;
    background-color: ${(props) => props.theme.background.tertiary};
    box-shadow: ${(props) => props.theme.shadows.tertiary};
  }

  .theme-color {
    color: ${(props) => props.theme.theme.main};
  }
`;
