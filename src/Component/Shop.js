import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { dataAdd } from "../Redux/ReduxAction/reduxaction";

const Shop = (props) => {
  console.log(props.product?.products);
  const iteam = props.product?.products;
  const { dataAdd } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dataAdd(data));
  }, []);
  return (
    <div>
      <h3>product{iteam?.length}</h3>
      {/* <button onClick={() => dataAdd("hi")}> add</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = {
  dataAdd: dataAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
