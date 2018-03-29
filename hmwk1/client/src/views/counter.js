import constants from '../constants';

export default function (store) {
	return class CounterComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
			// TODO: render counter inner HTML based on the store state

			this.onStateChange = this.handleStateChange.bind(this);
		}

		handleStateChange (newState) 
		{
			console.log('CounterComponent#stateChange', this, newState);
			// TODO: update inner HTML based on the new state
			this.innerHTML = `<p>Total Corn: <span id="cornNum">${newState.counter}</span></p>`;
		}

		connectedCallback () 
		{
			this.innerHTML = `<p>Total Corn: <span id="cornNum">0</span></p>`;
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.store.unsubscribe(this.onStateChange);
		}
	};
}

