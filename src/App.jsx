import { Navbar } from "./components/layout/navbar/Navbar";
import "./App.css";
import "@fontsource/roboto/300.css";
import { Fetching } from "./components/pages/fetching/Fetching";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <Fetching />
    </div>
  );
}

export default App;
