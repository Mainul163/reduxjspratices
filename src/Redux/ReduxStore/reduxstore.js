import { createStore } from "redux";
import cartreducer from "../ReduxReducer/reduxreducer";

export const store = createStore(cartreducer);
