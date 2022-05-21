import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { NavbarContainer } from "./Navbar.styles";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <NavbarContainer>
      <h1>Navbar</h1>
      <button onClick={toggleSidebar}>Toggle</button>
      <button onClick={() => setTheme?.("dark")}>Dark Theme</button>
      <button onClick={() => setTheme?.("light")}>Light Theme</button>
    </NavbarContainer>
  );
};

export default Navbar;
