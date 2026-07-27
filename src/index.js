import { LinkedList } from "./linked-list-test.js";

const list = new LinkedList();

console.log(list.list);

list.append('hi')

console.log(list.list);

list.append('my')

console.log(list.list);
console.log(list.head)

list.prepend('Ola');
console.log(list.list);
console.log(list.head)

console.log(list.size())
console.log(list.head())
console.log(list.tail())
console.log(list.at(2));
console.log(list.contains('my'))
console.log(list.findIndex('123123my'))
console.log(list.at(2));
console.log(list.toString())
list.insertAt(3,10,11)
console.log(list.toString())
console.log(list.removeAt(4))
console.log(list.toString())

