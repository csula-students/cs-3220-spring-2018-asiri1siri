export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;

	case 'CORN_PICK':
		state.counter += action.payload;
		return state;

	case 'BUY_GENERATOR':
		state.generators.forEach((element) =>{
		if(element.name === action.payload.name)
		{
			const generator = new Generator(element);
			const cost =  generator.getCost();
			if(state.counter >= cost)
			{
				state.counter -= cost;
				element.quantity++;
			}
			console.log(action);
		}

		});




	default:
		console.log(action);
		return state;
	}
}

