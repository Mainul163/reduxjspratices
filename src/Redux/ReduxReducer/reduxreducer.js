import { Data_From_Api, Delete_Data } from "../ReduxAction/reduxaction";

const initialState = {
  product: null,
};
const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case Data_From_Api:
      console.log(action.products);
      const products = action.products;
      const addproduct = { ...state.product, products };
      return {
        ...state,
        product: addproduct,
      };

    default:
      return state;
  }
};

export default cartreducer;
