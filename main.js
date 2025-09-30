import { LinkedList } from "./LinkedList.js";
const list = new LinkedList();

list.prepend("pear");
list.prepend("mango");
list.prepend("apple");


console.log(list.toString())