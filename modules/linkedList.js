import Node from "./listNode.js";

/**
 * Creates a linked list object with methods to manipulate the list.
 * @returns {LinkedList} A linked list object.
 */
const LinkedList = () => {
    let list = null;
    
  /**
   * Appends a value to the end of the list.
   * @param {any} value - The value to append.
   */
  
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
 /**
   * Prepends a value to the beginning of the list.
   * @param {any} value - The value to prepend.
   */
    const prepend = (value) => {
      if(!list){
        list = Node(value);
      }else{
        list = Node(value, list)
      }
    }
 /**
   * Returns the size of the list.
   * @returns {string} A message with the size of the list.
   */
    const size = () => {
      if(!list) return "List does not exist";
      let temp = list;
      
      let count = 0;
      while(temp != null){
        count += 1;
        temp = temp.nextNode;
      }
      return `The size of list is ${count}`;
    }

      /**
   * Returns the value of the head node of the list.
   * @returns {string} A message with the value of the head node or an error message if the list does not exist.
   */

    const head = () => {
      if(!list){
        return "List does not exist";
      }
      return `The value of the headNode is ${list.value}`;
    }
      /**
   * Returns the value of the tail node of the list.
   * @returns {string} A message with the value of the tail node or an error message if the list does not exist.
   */

    const tail = () => {
      if(!list) return "List does not exist";
      let temp = list;
      while(temp.nextNode !== null){
        temp = temp.nextNode
      }
      return `The value of the tailNode is ${temp.value}`
    }  /**
    * Returns the value of a node at a given index in the list.
    * @param {number} index - The index to look up.
    * @returns {string} A message with the value of the node or an error message if the index is invalid or the list does not exist.
    */

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
  /**
   * Removes the last node from the list.
   */
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
  /**
   * Checks if the list contains a given value.
   * @param {any} value - The value to search for.
   * @returns {boolean} True if the value is found, false otherwise.
   */
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
  /**
   * Finds the index of a node with a given value in the list.
   * @param {any} value - The value to search for.
   * @returns {string} A message with the index of the node or an error message if the value is not found or the list does not exist.
   */
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
  /**
   * Converts the list to a string representation.
   * @returns {string} A string with the values of the nodes separated by arrows and ending with null.
   */
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

  /**
   * Inserts a value at a given index in the list.
   * @param {any} value - The value to insert.
   * @param {number} index - The index to insert at.
   */
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

      /**
   * Removes a node at a given index from the list.
   * @param {number} index - The index to remove at.
   * @returns {string} A message with the result of the operation or an error message if the index is invalid.
   */

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
// Returns an object with methods to access and manipulate the list
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