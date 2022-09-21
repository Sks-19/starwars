import axios from "axios";
import { useEffect, useState } from "react";

const Film = (props) => {
  const [filmName, setFilmName] = useState();

  props.data.push(filmName);
  useEffect(() => {
    props.filmName.map(async (val) => {
      let y = await axios.get(val);
      let z = y.data.title;
      setFilmName(z);
    });
  }, []);

  let filmData = [...new Set(props.data)];

  return (
    <>
      {filmData?.map((val) => {
        return <p className="card-text text-danger">{val}</p>;
      })}
    </>
  );
};

export default Film;
