class Sorter {
  constructor() {
    // your implementation
    this.array=[];
    this.comparator= (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices.sort(this.comparator);

let rep;

      for (let i = 0; i < indices.length; i++){
        for(let j = i; j < indices.length; j++){
        if (this.comparator(this.array[indices[i]], this.array[indices[j]]) > 0) {
            rep = this.array[indices[i]];
            this.array[indices[i]] = this.array[indices[j]];
            this.array[indices[j]] = rep;
        }
}
}
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;