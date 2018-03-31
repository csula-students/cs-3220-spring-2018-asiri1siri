import Generator from '../src/models/generator';
import Story from '../src/models/story';
import constants from './constants';

export default function reducer (state, action) 
{
	switch (action.type) 
	{
		// BUY GENERATOR CASE
		case constants.actions.BUY_GENERATOR:
		state.generators.forEach((element) =>
		{
			if(element.name === action.payload.name)
			{
				const generator = new Generator(element);
				const cost = generator.getCost();

				if(state.counter >= cost)
				{
					state.counter -= state.counter;
					element.quantity++;
				}
			}

		});
		return state;

		// ON CLICK INCREMEMT STATE
		case constants.actions.INCREMENT:
		state.counter += action.payload;
		return state;

		// STORY STATE
		case constants.actions.CHECK_STORY:
		state.story.forEach((element) =>
		{
			let story = new Story(element)
			if(story.isUnlockedYet(state.counter))
			{
				element.state = "visible";
			}
		});

		// EXAMPLE CASE
		case constants.actions.EXAMPLE:
		state.example = action.payload;
		return state;

		// DEFAULT
		default:
		return state;
	}
}