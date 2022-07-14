import React from "react";

const Users = () => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:4000/admin/getAllUserData")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data);
  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {Object.keys(data).map((item, index) => {
          return (
            <tbody>
              <tr>
                <td>{data[item].name}</td>
                <td>{data[item].message}</td>
                <td>
                  {data[item].isActive ? (
                    <span class="badge bg-success">Active</span>
                  ) : (
                    <span class="badge bg-danger">Suspeded</span>
                  )}
                </td>

                <td>
                  {" "}
                  <span class="badge bg-primary glyphicon glyphicon-option-vertical btn">
                    Edit
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Users;
