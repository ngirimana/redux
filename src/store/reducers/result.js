import * as actionTpyes from '../actions';
 
const initialState = {

	results: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTpyes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result })
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