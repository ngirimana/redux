import * as actionTpyes from './actions';
 
const initialState = {
	counter: 0,
	results: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTpyes.INCREMENT:
			const newState = Object.assign({}, state);
			newState.counter = state.counter + 1
			return newState

		case actionTpyes.ADD:
			return {
				...state,
				counter: state.counter + action.val
			}

		case actionTpyes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		case actionTpyes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.val
			}
		case actionTpyes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: state.counter })
			}
		case actionTpyes.DELETE_RESULT:
			// const id = 2;
			// const newArray = [ ...state.results ];
			// newArray.splice(id, 1)
			const updatedArray=state.results.filter(result=> result.id!== action.resultElId)
			return {
				...state,
				results: updatedArray
			}
		default:

	}
	return state
}

export default reducer;