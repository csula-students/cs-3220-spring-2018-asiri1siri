import constants from '../constants';

export default function (store) 
{
	return class ButtonComponent extends window.HTMLElement 
	{
		constructor () 
		{
			super();
			this.store = store;

			this.onStateChange = this.handleStateChange.bind(this);

			// TODO: add click event to increment counter
			// hint: use "store.dispatch" method (see example component)
		}

		connectedCallback()
		{
			this.innerHTML = `<button id="pick">Pick!</button>`;
			
			this.addEventListener('click', () => {
				this.store.dispatch(action);
			});
		}
	
		disconnectedCallback () 
		{
			this.store.unsubscribe(this.onStateChange);
		}

	};
}


// ACTION OF BUTTON, TO INCREMENT BY ONE
const action = {
			type: constants.actions.INCREMENT,
			payload: 1
		};