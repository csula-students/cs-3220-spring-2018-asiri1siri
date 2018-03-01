// Fixed Errors from LAB 01 and LAB 02 Comments //
// Now has working PubSub //

class PubSub {
    constructor () {
        this.subscribers = [];
    }
    subscribe (fn) {
        this.subscribers.push(fn);
    }

    publish (data) {
        this.subscribers.forEach(subscriber => {
            subscriber(data);
        });
    }
}

const pubSub = new PubSub();

pubSub.subscribe(data => {
    console.log(data);
    window.incrementalGame.state.counter += data;
});