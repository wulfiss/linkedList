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
    };

    const prepend = (value) => {
      if(!list){
        list = Node(value);
      }else{
        list = Node(value, list)
      }
    }

    const size = () =>{
      let temp = list;
      let count = 0;
      while(temp != null){
        count += 1;
        temp = temp.nextNode;
      }
      return `The size of list is ${count}`;
    }

    const head = () =>{
      if(!list){
        return null;
      }
      return `The Head node value = ${list.value}`;
    }

    const getList = () => list;

    return {
      append,
      prepend,
      getList,
      size,
      head
    };
  };

export default LinkedList;