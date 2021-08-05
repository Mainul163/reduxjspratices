import React from "react";
import { useState } from "react";

const AddData = () => {
  const [data, setData] = useState({});

  // input data funcction
  const addData = (e) => {
    const aData = { ...data };
    aData[e.target.name] = e.target.value;
    setData(aData);
  };
  // post data function
  const handleSubmit = (e) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .then((iteam) => console.log("iteam", iteam));

    e.preventDefault();
    alert("add data successful");
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="">Userid:</label>
        <br />
        <input name="userId" onBlur={addData} type="number" />
        <br />
        <label htmlFor="">title:</label>
        <br />
        <input name="title" onBlur={addData} type="text" />
        <br />
        <label htmlFor="">body:</label>
        <br />
        <input name="body" onBlur={addData} type="text" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddData;
