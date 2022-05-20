import { useContext } from "react";
import { Background } from "./App.styles";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <Background>
      <button onClick={() => setTheme?.("dark")}>Dark Theme</button>
      <button onClick={() => setTheme?.("light")}>Light Theme</button>
    </Background>
  );
}

export default App;
