import { useState } from "react";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { LayoutContainer } from "./Layout.styles";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutContainer>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={handleToggleSidebar}
      />
      <div className="main">
        <Navbar toggleSidebar={handleToggleSidebar} />
        <Main />
      </div>
    </LayoutContainer>
  );
};

export default Layout;
