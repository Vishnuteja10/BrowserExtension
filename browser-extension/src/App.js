import "./App.css";
import { images } from "./db/images";
import { Home, Task } from "./pages";
import { useBrowser } from "./context/browser-context";
import { useEffect } from "react";

const index = Math.floor(Math.random() * images.length);
var image = images[index].image;

function App() {
  const { name, browserDispatch } = useBrowser();

  useEffect(() => {
    const userName = localStorage.getItem("name");
    browserDispatch({
      type: "NAME",
      payload: userName,
    });
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `URL("${image}")` }}>
      {name ? <Task /> : <Home />}
    </div>
  );
}

export default App;
