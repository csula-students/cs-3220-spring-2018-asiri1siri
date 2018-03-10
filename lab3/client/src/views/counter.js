export default function (store) {
	return class CounterComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;

			this.onStateChange = this.handleStateChange.bind(this);
		}

		handleStateChange (newState) {
			console.log('CounterComponent#stateChange', this, newState);
			this.innerHTML = `<p>Total Corn: </p> 
							<p id="cornNum">${newState.counter}</p>`;
		}

		connectedCallback () {
			this.innerHTML = `<p>Total Corn: </p> 
							<p id="cornNum">0</p>`;
							
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.store.unsubscribe(this.onStateChange);
		}
	};
}
