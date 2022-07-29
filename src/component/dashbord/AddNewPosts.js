import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import axios from "axios";

const AddNewPosts = () => {
  const [data, setData] = useState({
    B: "",
    status: "",
    salary: "",
    //  image: "",
  });

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // let base64code = "";
  // const onChange = (e) => {
  //   const files = e.target.files;
  //   const file = files[0];
  //   getBase64(file);
  // };

  // const onLoad = (fileString) => {
  //   console.log(fileString);
  //   this.base64code = fileString;
  // };

  // const getBase64 = (file) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoad(reader.result);
  //   };
  // };

  const handelonSubmit = async (e) => {
    let goData = {
      B: data.name,
      C: data.status,
      D: data.salary,
    };
    console.log(data);
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/googleSheet/addData",
      goData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setData({
      name: "",
      status: "",
      salary: "",
      //  image: "",
    });
  };
  //  console.log(data);
  return (
    <div>
      <form>
        <div class="form-row row">
          <div class="col-6 mx-5">
            <div class="form-group  mt-2">
              <label for="inputEmail4">Name</label>

              <input
                type="text"
                class="form-control"
                name="name"
                onChange={handelChange}
                value={data.name}
              />
            </div>
            <div class="form-group mt-2">
              <label for="inputPassword4">Status</label>
              <input
                type="text"
                class="form-control"
                name="status"
                onChange={handelChange}
                value={data.status}
              />
            </div>
            <div class="form-group mt-2">
              <label>Salary</label>
              <input
                type="text"
                class="form-control"
                name="salary"
                onChange={handelChange}
                value={data.salary}
              />
            </div>
          </div>
          <div className="col-4 card rounded border-bottom bg-light p-2 text-white ">
            <div class="card-body">
              <input
                class="btn btn-outline-success mt-3 mx-4"
                type="file"
                //value={data.salary}
                //onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* <div class="form-group mt-2">
          <label for="inputAddress">Main Body</label>
          <textarea
            type="text"
            class="form-control"
            placeholder=" Main Body"
            name="mainBody"
            onChange={handelChange}
            value={data.mainBody}
          />
        </div> */}
        <button
          type="submit"
          onClick={handelonSubmit}
          class="btn btn-outline-success mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPosts;
