import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { dataFromApi } from "../../../Redux/ReduxAction/reduxaction";
import GridCrudData from "../GridCrudData/GridCrudData";
const GridCrud = (props) => {
  const { dataFromApi } = props;
  const iteam = props.product?.products;
  // load data from api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dataFromApi(data));
  }, []);
  return (
    <div className="container">
      <div className="row ">
        {iteam?.map((data) => (
          <GridCrudData loadedData={data} key={data.id}></GridCrudData>
        ))}
      </div>
    </div>
  );
};

// connesect redux
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = {
  dataFromApi: dataFromApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridCrud);
