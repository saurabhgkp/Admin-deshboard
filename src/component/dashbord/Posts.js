import React from "react";
import { NavLink } from "react-router-dom";
const Posts = () => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:4000/googleSheet/getAllData")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Data);
        setData(data.Data);
      });
  }, []);
  // console.log(data);

  return (
    <div>
      <NavLink to="/addNewPosts" className="list-group-item ">
        <button type="submit" class="btn btn-outline-success  m-3">
          Add New Posts
        </button>
      </NavLink>

      {Object.keys(data).map((item, index) => {
        return (
          <div class="card" key={index}>
            <div class="card-body">
              <span class=" badge bg-danger glyphicon glyphicon-option-vertical btn">
                {" "}
                <p>{data[item].Name}</p>
              </span>
              <h5 class="card-title text-success bg-light">
                {data[item].Status}
              </h5>
              <p class="card-text bg-light">{data[item].Salary}</p>
              <p className="badge bg-secondary glyphicon glyphicon-option-vertical mx-auto">
                {new Date().toString().slice(0, 15)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
