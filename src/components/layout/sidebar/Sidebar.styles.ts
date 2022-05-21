import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  flex: none;

  display: flex;
  flex-direction: column;

  height: 100vh;
  width: ${(props) => (props.isOpen ? "22rem" : "0")};
  overflow: hidden;

  border-right: 1px solid
    ${(props) => (props.isOpen ? props.theme.border.main : "0")};

  transition: width 0.3s ease-in-out, border-right 0.3s ease-in-out;
`;
