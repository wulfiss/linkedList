import Node from "./listNode.js";

const LinkedList = () => {
    let list = Node();
  
    const append = (value) => {
      if(!list.value){
        list.value = value;
      }else{
        let tmp = list;
        while(tmp.nextNode != null){
          tmp = tmp.nextNode;
        }
        tmp.nextNode = Node(value);
      }
    };

    const prepend = (value) => {
      if(!list.value){
        list.value = value;
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
      return count;
    }

    const getList = () => list;

    return {
      append,
      prepend,
      getList,
      size
    };
  };

export default LinkedList;