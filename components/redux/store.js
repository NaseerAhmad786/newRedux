import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import  createSagaMiddleWare from 'redux-saga'
import SagaData from "./sage";
const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
reducer:rootReducer,
middleware:()=>[sagaMiddleWare] //middleware hi lkhna
})
sagaMiddleWare.run(SagaData)
export default store;