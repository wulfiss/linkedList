import LinkedList from "./modules/linkedList.js";

const list = LinkedList();

list.append('1');
list.append('2');
list.append('3');
list.prepend(10);
list.prepend('20');
console.log(list.toString());//( 20 ) --> ( 10 ) --> ( 1 ) --> ( 2 ) --> ( 3 ) --> null 
console.log(list.size());//The size of list is 5
console.log(list.head());//The value of the headNode is 20
console.log(list.tail());//The value of the tailNode is 3
console.log(list.at(2));//The value at index 2 is 1
list.pop();
console.log(list.toString());//( 20 ) --> ( 10 ) --> ( 1 ) --> ( 2 ) --> null 
console.log(list.contains('3'));//false
console.log(list.contains('1'));//true
console.log(list.find(4));//The Value 4 do not exist in the list
console.log(list.find('20'));//The Value 20 is at index 0 of the list
list.insertAt('20',1);
console.log(list.toString());//( 20 ) --> ( 20 ) --> ( 10 ) --> ( 1 ) --> ( 2 ) --> null 
list.removeAt(2);
console.log(list.toString());//( 20 ) --> ( 20 ) --> ( 1 ) --> ( 2 ) --> null 
