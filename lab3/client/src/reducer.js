import constants from './constants';

var index = 0;

export default function reducer (state, action) 
{
	switch (action.type) 
	{
	case constants.actions.EXAMPLE_MUTATION:
		state.example = action.payload;
		return state;
	case constants.actions.CORN_PICK:
		state.counter ++;
		return state;


	// my TODO ******************************** //
	case constants.actions.BUY_GENERATOR:
		state.example = action.payload;
		return state;
	// **************************************** //


	default:
		return state;
	}
}