import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Paginate from "./Paginate";
import { BsStar } from "react-icons/bs";
import "./Home.scss";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    let get = JSON.parse(localStorage.getItem("checkedData") || []);
    setSelectedData(get);
  }, []);

  const handleChange = (e) => {
    setTimeout(() => {
      let get = JSON.parse(localStorage.getItem("checkedData") || []);
      setSelectedData(get);
    }, 500);

    const { name, checked } = e.target;

    if (checked) {
      selectedData.push(name);
      localStorage.setItem("checkedData", JSON.stringify(selectedData));
    } else {
      const popped = selectedData.filter((val) => val !== name);
      localStorage.setItem("checkedData", JSON.stringify(popped));
    }
  };

  const selected = props.starwarsData?.map((star) => {
    if (selectedData.includes(star.name)) {
      return { ...star, isSelected: true };
    } else {
      return star;
    }
  });

  return (
    <>
      {selected?.map((stars) => {
        return (
          <>
            <div className="row cardDiv">
              <div
                className="card m-4 myCard"
                style={{
                  width: "15rem",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <div className="p-2">
                  <label className="container">
                    <input
                      className="inputChecked"
                      type="checkbox"
                      name={stars?.name}
                      checked={stars?.isSelected || (false && true)}
                      onChange={handleChange}
                    />
                    <BsStar className="starIcon checkmark" />
                  </label>
                </div>
                <NavLink
                  className="NavLink"
                  to={{
                    pathname: "/details",
                  }}
                  state={{
                    name: stars.name,
                    list: stars,
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-danger">{stars.name}</h5>
                    <hr className="text-success"></hr>
                    <p className="card-text text-dark">
                      Birth Year : {stars.birth_year}
                    </p>
                    <p className="card-info text-dark">
                      Gender : {stars.gender}
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </>
        );
      })}
      <div className="py-4">
        <Paginate setStarwarsData={props.setStarwarsData} />
      </div>
    </>
  );
};

export default Home;
