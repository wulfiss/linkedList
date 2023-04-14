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

    return {
      append,
      list
    };
  };

export default LinkedList;