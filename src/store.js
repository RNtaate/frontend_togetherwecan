import { createStore } from "redux";
import allReducers from "./redux/reducers";

const store = createStore(allReducers);

export default store