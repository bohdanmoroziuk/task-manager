class DataStore {
    static save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    static restore(key) {
        return JSON.parse(localStorage.getItem(key)) || {};
    };
}

export default DataStore;