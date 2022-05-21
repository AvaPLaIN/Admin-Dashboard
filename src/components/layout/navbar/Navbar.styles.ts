import styled from "styled-components";

export const NavbarContainer = styled.div`
  flex: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: clamp(6rem, 10vh, 10rem);

  border-bottom: 1px solid ${(props) => props.theme.border.main};

  transition: border-bottom 0.3s ease-in-out;
`;
