import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import axios from "axios";

const AddNewPosts = () => {
  const [data, setData] = useState({
    imageUrl: "",
    category: "",
    title: "",
    mainBody: "",
  });
  const notify = () => toast("Wow so easy!");
  const handelChange = (e) => {
    // e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(...data);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   handelonSubmit();
  // };
  const handelonSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/admin/addPosts",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setData({
      imageUrl: "",
      category: "",
      title: "",
      mainBody: "",
    });
  };
  //  console.log(data);
  return (
    <div>
      <form>
        <div class="form-row row">
          <div class="col-6 mx-5">
            <div class="form-group  mt-2">
              <label for="inputEmail4">Category</label>

              <input
                type="text"
                class="form-control"
                name="category"
                placeholder="category"
                onChange={handelChange}
                value={data.category}
              />
            </div>
            <div class="form-group mt-2">
              <label for="inputPassword4">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                name="title"
                onChange={handelChange}
                value={data.title}
              />
            </div>
          </div>
          <div className="col-4 card rounded border-bottom bg-light p-2 text-white ">
            <div class="card-body">
              <input
                class="btn btn-outline-success mt-3 mx-4"
                type="file"
                onChange={""}
              />
              <button class="btn btn-outline-danger mt-3">Upload!</button>
            </div>
          </div>
        </div>
        <div class="form-group mt-2">
          <label for="inputAddress">Main Body</label>
          <textarea
            type="text"
            class="form-control"
            placeholder=" Main Body"
            name="mainBody"
            onChange={handelChange}
            value={data.mainBody}
          />
        </div>
        <button
          type="submit"
          onClick={handelonSubmit}
          class="btn btn-outline-success mt-3"
        >
          Submit
        </button>
        <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddNewPosts;
