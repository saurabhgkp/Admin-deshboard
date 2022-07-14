import React from "react";
import { NavLink } from "react-router-dom";
const Posts = () => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:4000/showData")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  console.log(data);

  return (
    <div>
      <NavLink to="/addNewPosts" className="list-group-item ">
        <button type="submit" class="btn btn-outline-success  m-3">
          Add New Posts
        </button>
      </NavLink>

      {Object.keys(data).map((item, index) => {
        return (
          <div class="card">
            <div class="card-body">
              <span class=" badge bg-danger glyphicon glyphicon-option-vertical btn">
                {" "}
                <p>{data[item].category}</p>
              </span>
              <h5 class="card-title text-success bg-light">
                {data[item].title}
              </h5>
              <p class="card-text bg-light">{data[item].mainBody}</p>
              <p className="badge bg-secondary glyphicon glyphicon-option-vertical mx-auto">
                {new Date().toString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
