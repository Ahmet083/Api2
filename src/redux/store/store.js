
import { createStore } from "redux";

import reducers from "./store"

const store = createStore(reducers)

export default store