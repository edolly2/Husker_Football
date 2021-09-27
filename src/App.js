import "./App.css";
import SiteBrand from "./_components/SiteBrand";
import NavBar from "./_components/NavBar";
import MainContent from "./_components/MainContent";

function App() {
  return (
    <div className="App">
      <SiteBrand />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
