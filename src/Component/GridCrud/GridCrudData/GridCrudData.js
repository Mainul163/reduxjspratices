import React from "react";
import { Link } from "react-router-dom";

const GridCrudData = ({ loadedData }) => {
  const addimg = { ...loadedData };
  addimg.img =
    "https://i.pinimg.com/474x/2e/93/a2/2e93a2f0a07673bd6ef71e91b4a156ab.jpg";

  return (
    <div className="col-12 col-md-4 mt-2 d-flex justify-content-center">
      <div class="card" style={{ width: " 18rem" }}>
        <img src={addimg.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Id: {loadedData.id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            userId: {loadedData.userId}
          </h6>
          <p class="card-text">
            <span style={{ color: "red" }}>Title:</span> {loadedData.title}
          </p>
          <p class="card-text">
            {" "}
            <span style={{ color: "red" }}>Body:</span> {loadedData.body}
          </p>
          <Link to={`/cruddetails/${loadedData.id}`} class="card-link">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCrudData;
