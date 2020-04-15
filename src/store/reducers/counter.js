import * as actionTpyes from '../actions';

const initialState = {
	counter: 0
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
		
		default:

	}
	return state
}

export default reducer;