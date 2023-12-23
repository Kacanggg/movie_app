import "./App.css";
import MoviesList from "./components/circle-card/movies/MoviesList";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src="/images/cilanimal.svg" alt="animal" />
          <h2 className="header-title">MOVIES</h2>
        </div>
      </div>
      <MoviesList />
    </div>
  );
}

export default App;
