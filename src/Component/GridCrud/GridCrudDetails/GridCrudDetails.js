import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { dataFromApi } from "../../../Redux/ReduxAction/reduxaction";
const GridCrudDetails = (props) => {
  console.log(props);
  const { dataFromApi, deleteData } = props;
  const { id } = useParams();
  const iteam = props.product?.products;
  let details = iteam?.find((data) => data.id == id);
  const addimg = { ...details };
  addimg.img =
    "https://i.pinimg.com/474x/2e/93/a2/2e93a2f0a07673bd6ef71e91b4a156ab.jpg";
  // load data from api
  const loadallData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dataFromApi(data));
  };
  useEffect(() => {
    loadallData();
  }, []);
  // delete function
  const deleteIteam = (id) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => loadallData());
  };
  return (
    <div className="row container d-flex justify-content-center">
      <div className="col-12 col-md-12 mt-5 d-flex justify-content-center">
        <div class="card shadow" style={{ width: " 18rem" }}>
          <img src={addimg.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Id: {details?.id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              userId: {details?.userId}
            </h6>
            <p class="card-text">
              <span style={{ color: "red" }}>Title:</span> {details?.title}
            </p>
            <p class="card-text">
              <span style={{ color: "red" }}>Body:</span> {details?.body}
            </p>
            <Link to="/" class="card-link">
              back
            </Link>
            <br />
            <button onClick={() => deleteIteam(details?.id)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = {
  dataFromApi: dataFromApi,
};
export default connect(mapStateToProps, mapDispatchToProps)(GridCrudDetails);
