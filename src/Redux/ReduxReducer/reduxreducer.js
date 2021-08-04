import { Data_Add } from "../ReduxAction/reduxaction";

const initialState = {
  product: null,
};
const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case Data_Add:
      console.log(state.product);
      return {
        product: state.product,
      };

    default:
      return state;
  }
};

export default cartreducer;
