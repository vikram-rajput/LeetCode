/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
  let res = [];
  let stack = [[root, 0]];
  while (stack.length) {
    let [curr, level] = stack.pop();
    if (!res[level]) res.push([]);
    res[level].push(curr.val);
    let children = curr.children;
    if (children) {
      for (var i = children.length - 1; i >= 0; i--) {
        stack.push([children[i], level + 1]);
      }
    }
  }
  return res;
};