import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Paginate from "./Paginate";
import { BsStar } from "react-icons/bs";
import "./Home.scss";

const Home = (props) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    let unfavData = props.starwarsData?.map((stars) => {
      return { ...stars, isChecked: false };
    });
    console.log("unfavData", unfavData);
    console.log(name, checked);
    let favData = props.starwarsData?.map((stars) =>
      stars.name === name ? { ...stars, isChecked: checked } : stars
    );
    console.log("favData", favData);
  };
  return (
    <>
      {props.starwarsData?.map((stars) => {
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
                      type="checkbox"
                      name={stars.name}
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
                    <p className="card-info text-primary">
                      Gender : {stars.gender}
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <Paginate setStarwarsData={props.setStarwarsData} />
      </div>
    </>
  );
};

export default Home;
