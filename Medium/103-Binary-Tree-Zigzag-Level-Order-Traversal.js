/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
  let queue = [root], res = [[root.val]], level = 2;
  while (queue.length) {
    let next = [], values = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.left) {
        next.push(node.left);
        values.push(node.left.val);
      }
      if (node.right) {
        next.push(node.right);
        values.push(node.right.val);
      }
    }
    if (!next.length) continue; // no more nodes
    if (level % 2 === 1) res.push([...values]);
    else res.push(values.reverse());
    queue = next;
    level++;
  }  
  return res;
};