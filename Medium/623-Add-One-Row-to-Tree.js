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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function(root, val, depth) {
    let dummyRoot = new TreeNode(null);
  dummyRoot.left = root;
  let stack = [[dummyRoot, 0]];
  while (stack.length) {
    let [node, lvl] = stack.pop();
    if (lvl === depth - 1) {
      let left = node.left, right = node.right;
      node.left = new TreeNode(val);
      node.right = new TreeNode(val);
      
      node.left.left = left;
      node.right.right = right;
    } else {
      if (node.left) stack.push([node.left, lvl + 1]);
      if (node.right) stack.push([node.right, lvl + 1]);
    }
  }
  return dummyRoot.left;
};