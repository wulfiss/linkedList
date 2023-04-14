import Node from "./listNode.js";

const LinkedList = () => {
    let list = Node();
  
    const append = (value) => {
      if(!list.value){
        list.value = value;
      }else{
        let tmp = list;
        while(tmp.next != null){
          tmp = tmp.next;
        }
        tmp.next = Node(value);
      }
    };

    return {
      append,
      list
    };
  };

export default LinkedList;