import { Node } from "./Node.js";
export class LinkedList {
  #head = null;
  append(value) {}
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }
  size() {
    if (this.#head === null) return null;
    let temp = this.#head;
    let count = 0;
    while (temp) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }
  head() {
    return this.#head !== null ? this.#head : null;
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
    let prev = null, cur = temp;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
      prev = cur;
      cur = temp;
    }
    prev.nextNode = null;
  }
  contains(value) {}
  find(value) {}
  toString() {
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
