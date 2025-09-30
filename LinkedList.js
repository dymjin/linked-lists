import { Node } from "./Node.js";
export class LinkedList {
  #head = null;
  append(value) {
    if (this.#head === null) this.prepend(value);
    else this.tail().nextNode = new Node(value, null);
  }
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }
  size() {
    if (this.#head === null) return 0;
    let temp = this.#head;
    let count = 0;
    while (temp) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }
  head() {
    if (this.#head !== null) return this.#head;
    return null;
  }
  tail() {
    if (this.#head === null) return null;
    let temp = this.#head;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }
  at(index) {
    if (this.#head === null) return null;
    let temp = this.#head;
    let counter = 0;
    while (temp !== null) {
      if (counter === index) return temp;
      temp = temp.nextNode;
      counter++;
    }
  }
  pop() {
    if (this.#head === null) return null;
    let temp = this.#head;
    let prev = null,
      cur = temp;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
      prev = cur;
      cur = temp;
    }
    prev.nextNode = null;
  }
  contains(value) {
    if (this.#head === null) return false;
    let temp = this.#head;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }
  find(value) {
     if (this.#head === null) return null;
    let temp = this.#head;
    let counter = 0;
    while (temp !== null) {
      if (temp.value === value) return counter;
      temp = temp.nextNode;
      counter++;
    }
    return null;
  }
  toString() {
    if (this.#head === null) return null;
    let temp = this.#head,
      str = "";
    while (temp) {
      str += `( ${temp.value} )`;
      str += ` -> `;
      temp = temp.nextNode;
    }
    str += temp;
    return str;
  }
  insertAt(value, index) {}
  removeAt(index) {}
}
