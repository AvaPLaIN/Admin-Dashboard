import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  flex: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: ${(props) => (props.isOpen ? "22rem" : "0")};
  overflow: hidden;

  border-right: 1px solid black;

  transition: width 0.3s ease-in-out;
`;
