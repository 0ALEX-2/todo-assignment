import {createStore,applyMiddleware,combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { todoReducer } from "./Reducer"



const reducer=combineReducers({
    todos:todoReducer
})

const middleware=[thunk]
export const store=createStore(
reducer,composeWithDevTools(applyMiddleware(...middleware))
)

