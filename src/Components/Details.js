import Film from "./Film";
import { useLocation } from "react-router-dom";

const Details = () => {
  let data = [];
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <div className="row">
        <h2 className="card-title my-4" style={{ textAlign: "center" }}>
          <b>{state.list.name}</b>
        </h2>
        <hr className="text-success"></hr>
        <div className="col-6 card" style={{ width: "23rem", margin: "auto" }}>
          <div className="card-body">
            <div className="row p-2" style={{ border: ".5px double gray" }}>
              <p className="card-title text-white">
                <b>Appearences</b>
              </p>
              <Film filmName={state.list.films} data={data} />
            </div>

            <div className="row">
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Gender</b>
                </p>
                <p className="card-text text-danger">{state.list.gender}</p>
              </div>
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Birth Year</b>
                </p>
                <p className="card-text text-danger">{state.list.birth_year}</p>
              </div>
            </div>

            <div className="row">
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Height</b>
                </p>
                <p className="card-text text-danger">{state.list.height}</p>
              </div>
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Mass</b>
                </p>
                <p className="card-text text-danger">{state.list.mass}</p>
              </div>
            </div>
            <div className="row">
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Eye Color</b>
                </p>
                <p className="card-text text-danger">{state.list.eye_color}</p>
              </div>
              <div className="col p-2" style={{ border: ".5px double gray" }}>
                <p className="text-white">
                  <b>Hair Color</b>
                </p>
                <p className="card-text text-danger">{state.list.hair_color}</p>
              </div>
            </div>
            <div className="row p-2" style={{ border: ".5px double gray" }}>
              <p className="text-white">
                <b>Skin Color</b>
              </p>
              <p className="card-text text-danger">{state.list.skin_color}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
