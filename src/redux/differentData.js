let store = {
    _subscriber() {
        console.log('fjkdl');
    },
    _state: {
        firstN: 'Vika',
        lastN: 'Holub'
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber() = observer;
    },
    setFirstName(value) {
        this._state.firstN = value;
        this._subscriber();
    }
};

let state = store.getState();
store.setFirstName('Nadia Fly');
state = store.getState();

store.subscribe(() => {
    let state = store.getState();
});

store.setFirstName('sdfs');

