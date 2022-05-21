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
    box-shadow: ${(props) => props.theme.shadow.main};
  }

  .tertiary-bg-color {
    height: 5rem;
    width: 15rem;
    background-color: ${(props) => props.theme.background.tertiary};
    box-shadow: ${(props) => props.theme.shadow.secondary};
  }

  .theme-color {
    height: 5rem;
    width: 15rem;
    background-color: ${(props) => props.theme.theme.main};
    color: ${(props) => props.theme.font.white};
    box-shadow: ${(props) => props.theme.shadow.main};
  }
`;
