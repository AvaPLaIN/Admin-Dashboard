import styled from "styled-components";

export const HeaderContainer = styled.div`
  flex: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: clamp(6rem, 10vh, 10rem);

  border-bottom: 1px solid ${(props) => props.theme.border.main};

  transition: border-bottom 0.3s ease-in-out;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 0 1.5rem;

    .logo {
      text-transform: uppercase;
      letter-spacing: 0.6rem;
    }

    .close-sidemenu-button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.font.main};

      transition: color 0.3s ease-in-out;

      font-size: 2.5rem;
      cursor: pointer;

      padding: 1rem;
    }
  }
`;
