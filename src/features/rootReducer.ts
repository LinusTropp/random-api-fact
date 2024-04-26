import { combineReducers } from "@reduxjs/toolkit";
import { randomFactReducer } from "./randomFact";


const rootReducer = combineReducers({
	RandomFact : randomFactReducer
});

export {rootReducer};