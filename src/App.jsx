import "./App.css";
import DarkMood from "./components/DarkMood.component";
import Hero from "./components/Hero.component";
import Tweet from "./components/Tweet.components";

function App() {

  
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden transition-colors duration-700">
      <Hero />
      <Tweet/>
    </div>
  );
}

export default App;
