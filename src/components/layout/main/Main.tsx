import { MainContainer } from "./Main.styles";

const Main = () => {
  return (
    <MainContainer>
      <p className="main-font-color">Main Font Color</p>
      <p className="secondary-font-color">Secondary Font Color</p>

      <div className="secondary-bg-color">Secondary Background Color</div>
      <div className="tertiary-bg-color">Tertiary Background Color</div>

      <div className="theme-color">
        <p>Theme Color</p>
      </div>
    </MainContainer>
  );
};

export default Main;
