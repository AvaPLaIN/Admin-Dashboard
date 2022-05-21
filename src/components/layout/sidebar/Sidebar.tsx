import { SidebarContainer } from "./Sidebar.styles";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <h1>Sidebar</h1>
      <button onClick={toggleSidebar}>Close</button>
    </SidebarContainer>
  );
};

export default Sidebar;
