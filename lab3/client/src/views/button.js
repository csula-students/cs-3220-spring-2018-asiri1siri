import constants from '../constants';

const action = {
	type: constants.actions.CORN_PICK,
	payload: {
		quantity: 1
		}
	};

export default function (store) {
	return class ButtonComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
		}

		connectedCallback () 
		{
			this.innerHTML = `<button type="button" name="click to pick" id="pick">Pick!</button>`;
			this.addEventListener('click', () => {
				this.store.dispatch({
					type: constants.actions.CORN_PICK,
					payload: 
					{
						quantity: 1
					}
				}
			);
			});
		}

		disconnectedCallback () {
			console.log('ExampleComponent#onDisconnectedCallback');
			this.store.unsubscribe(this.onStateChange);
		}
	};
}