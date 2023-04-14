import Node from "./listNode.js";

const LinkedList = () => {
    let list = null;
  
    const append = (value) => {
      if(!list){
        list = Node(value);
      }else{
        let tmp = list;
        while(tmp.nextNode != null){
          tmp = tmp.nextNode;
        }
        tmp.nextNode = Node(value);
      }
    }

    const prepend = (value) => {
      if(!list){
        list = Node(value);
      }else{
        list = Node(value, list)
      }
    }

    const size = () => {
      let temp = list;
      let count = 0;
      while(temp != null){
        count += 1;
        temp = temp.nextNode;
      }
      return `The size of list is ${count}`;
    }

    const head = () => {
      if(!list){
        return "List does not exist";
      }
      return `The value of the headNode is ${list.value}`;
    }

    const tail = () => {
      if(!list) return "List does not exist";
      let temp = list;
      while(temp.nextNode !== null){
        temp = temp.nextNode
      }
      return `The value of the tailNode is ${temp.value}`
    }

    const at = (index) => {
      if(!list) return "List does not exist";
      let temp = list;
      let i = 0
      while(i < index && temp != null){
        temp = temp.nextNode
        i += 1;
      }
      if(!temp){
        let length = size().slice(-1);
        return `The index ${index} is greater than the length of the list, the length of the list is ${length}`;
      }
      return `The value at index ${index} is ${temp.value}`;
    }

    const pop = () => {
      if(!list) return "List does not exist";
      let current = list;
      let prev = null;
      while(current.nextNode !== null){
        prev = current;
        current = current.nextNode;
      }
      prev.nextNode = null;
    }

    const contains = (value) => {
      if(!list) return "List does not exist";
      let temp = list;
      let i = false;
      while(temp !== null){
        if(temp.value === value){
          i = true;
        }
        temp = temp.nextNode;
      }

      if(i === false){return false};
      if(i === true) {return true};
    }

    const find = (value) => {
      if(!list) return "List does not exist";
      let temp = list;
      let index = 0;
      let i = 0;
      while(i != 1 && temp != null){
        index += 1;
        if(temp.value === value){
          i = 1;
        }
        temp = temp.nextNode
      }
      if(i === 1){
        return `The Value ${value} is at index ${index - 1} of the list`;
      }
      return `The Value ${value} do not exist in the list`;
    }

    const toString = () => {
      if(!list) return "List does not exist";
      let temp = list;
      let stringList = '';
      while(temp != null){
        stringList += `( ${temp.value} ) --> `;
        temp = temp.nextNode
      }

      return stringList + 'null ';
    }

    const insertAt = (value, index) => {

      if(!list) return "List does not exist";

      let length = Number(size().slice(-1)); //extract the length for size text

      if(index === 0){
        return prepend(value);
      } else if(index >= length){
        return append(value);
      }

      let current = list;
      let prev = null;
      let i = 0;
      while(i < index){
        i += 1;
        prev = current;
        current = current.nextNode;
      }

      let temp = Node(value, current);
      prev.nextNode = temp;
    }

    const removeAt = (index) => {
      let length = Number(size().slice(-1)); //extract the length for size text
      if(index > length) return "The index is greater than the list's length";
      if(!list) return "List does not exist";
      if(index === length) return pop();

      let current = list;
      let prev = null;
      let i = 0;
      while(i < index){
        i += 1;
        prev = current;
        current = current.nextNode;
      }
      current = current.nextNode;
      prev.nextNode = current;
    }

    const getList = () => list;

    return {
      append,
      prepend,
      getList,
      size,
      head, 
      tail,
      at,
      pop,
      contains,
      find,
      toString,
      insertAt,
      removeAt
    };
  };

export default LinkedList;