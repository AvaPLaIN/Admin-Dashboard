import { useContext } from "react";
import { Background } from "./App.styles";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <Background>
      <button onClick={() => setTheme("dark")}>Toggle Theme</button>
    </Background>
  );
}

export default App;
