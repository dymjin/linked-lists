import { LinkedList } from "./LinkedList.js";
const list = new LinkedList();

list.append("bear");
list.append("squid");
list.append("bee");
list.insertAt("pineapple", 1);
// list.prepend("pear");
// list.prepend("mango");
// list.prepend("apple");

// list.pop();
// list.removeAt(0);
// console.log(list.head());
// console.log(list.tail());
// console.log(list.size());
// console.log(list.contains("squdid"));
// console.log(list.find("bee"));
console.log(list.toString());
