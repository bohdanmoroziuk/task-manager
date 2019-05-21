const DataStore = Object.freeze({
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  restore(key) {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
});

export default DataStore;
