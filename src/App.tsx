import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme?.("dark")}>Dark Theme</button>
      <button onClick={() => setTheme?.("light")}>Light Theme</button>
      <p>Test</p>
      <h1>Test</h1>
    </div>
  );
}

export default App;
