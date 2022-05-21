import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import { SidebarContainer } from "./Sidebar.styles";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <Header toggleSidebar={toggleSidebar} />
      <Categories />
    </SidebarContainer>
  );
};

export default Sidebar;
