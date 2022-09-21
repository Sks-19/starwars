import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Nav";
import Details from "./Components/Details";
import "./App.css";

function App() {
  const [starwarsData, setStarwarsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=1`)
      .then((res) => setStarwarsData(res.data.results));
  }, []);
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <Routes>
          <Route
            path="/starwars"
            element={
              <Home
                starwarsData={starwarsData}
                setStarwarsData={setStarwarsData}
              />
            }
          />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
