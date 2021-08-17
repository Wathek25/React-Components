import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Card/Services";
import Carousel from "./Components/Carousel/Carousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Services />
    </div>
  );
}

export default App;
