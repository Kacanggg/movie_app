import logo from "./logo.svg";
import CircleCard from "./components/circle-card/CircleCard";
import "./App.css";
import { useState } from "react";
import MoviesList from "./components/circle-card/movies/MoviesList";

const breedData = [
  {
    img: "https://placehold.co/400x400/000000/FFF",
    title: "Lion",
  },
  {
    img: "https://placehold.co/400x400/orange/FFF",
    title: "Cat",
  },
  {
    img: "https://placehold.co/400x400/red/FFF",
    title: "Bird",
  },
  {
    img: "https://placehold.co/400x400/yellow/FFF",
    title: "Cow",
  },
];

function App() {
  const { cart, setCart } = useState();
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src="/images/cilanimal.svg" alt="animal" />
          <h2 className="header-title">MOVIES</h2>
        </div>
        {/* <div className="header-left">
          <img src="/images/cilanimal.svg" alt="animal" />
          <h2 className="header-title">List CAT BREED</h2>
        </div>
  <span className="header-view-all">{cart}:View All</span> */}
      </div>
      {/* <div className="card-box">
        {breedData.map((data) => {
          return (
            <CircleCard img={data.img} title={data.title} setCart={data.cart} />
          );
        })}
      </div> */}
      <MoviesList />
    </div>
  );
}

export default App;
