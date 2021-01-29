import React, {useState} from "react"
import "./App.css";
import Main from "./components/Main/Main";
import { moviesData } from "./moviesData";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const AddNewMovie=(x)=>{
    setMovies([...movies, x])
  }
  return (
    <div className="App">
      <Main movies={movies} AddNewMovie={AddNewMovie} />
    </div>
  );
}

export default App;
