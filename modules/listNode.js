/**
 * Creates a node object with a value and a reference to the next node.
 * @param {any} value - The value of the node.
 * @param {Node} [nextNode=null] - The next node in the list.
 * @returns {Node} A node object.
 */


const Node = (value = null, nextNode = null) => {
    return {
      value,
      nextNode,
    };
  };
  
export default Node;