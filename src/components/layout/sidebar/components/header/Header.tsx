import { MdOutlineClose } from "react-icons/md";
import { HeaderContainer } from "./Header.styles";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <h1 className="logo">Logo</h1>
        <button className="close-sidemenu-button" onClick={toggleSidebar}>
          <MdOutlineClose />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
