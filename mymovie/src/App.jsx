import { SearchBar } from "./components/SearchBar";
import "./styles/App.css";

const App = () => {
  // Functions
  function searchMovie() {

  }

  // Logic
  return (
    <div className="app-container">
      <h1>My Movie!</h1>
      <SearchBar onSubmit={searchMovie}/>
    </div>
  );
};

export default App;