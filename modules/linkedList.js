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
        let length = size();
        return `The index ${index} is greater than the length of the list, the length of it is ${length}`;
      }
      return `The value at index ${index} is ${temp.value}`;
    }

    const pop = () => {
      if(!list) return "List does not exist";
      let current = list;
      let prev = null;
      while(temp.nextNode !== null){
        prev = temp;
        current = temp.nextNode;
      }
      prev.nextNode = null;
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
      pop
    };
  };

export default LinkedList;