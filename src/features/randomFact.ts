import { createAction, createReducer } from "@reduxjs/toolkit";

export enum FactStatus {
	NORMAL,
	FETCHING,
	SUCCES,
	FAILURE


}

interface Fact {
	fact : string | null;
	status : FactStatus;


}

const initialState : Fact = {
	fact: null,
	status: FactStatus.NORMAL

}

const isFetching = createAction('is fetching fact');
const succes = createAction<string>('succes fact');
const failure = createAction('failure fact');

const factActions = {isFetching, succes, failure};

const randomFactReducer = createReducer(initialState, builder => {
	builder
		.addCase(isFetching, (state) => (
			{
			status : FactStatus.FETCHING,
			fact: state.fact
		}
	))

	.addCase(succes, (state, action) => ( {
		status : FactStatus.SUCCES,
		fact : action.payload
	}))

	.addCase(failure, (state, action) => ( {
		status : FactStatus.FAILURE,
		fact: 'failure fact'
	}))


});

export { factActions, randomFactReducer};