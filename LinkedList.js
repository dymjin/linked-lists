import { Node } from "./Node.js";
export class LinkedList {
  #head = null;
  append(value) {}
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }
  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
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
