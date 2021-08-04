import React from "react";
import { connect } from "react-redux";

const Shop = (props) => {
  return (
    <div>
      <h3>this is shop</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(Shop);
