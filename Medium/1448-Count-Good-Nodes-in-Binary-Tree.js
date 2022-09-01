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
 * @return {number}
 */
var goodNodes = function (root) {
    let stack = [[root, root.val]], count = 0;
    while (stack.length) {
        let [node, currMax] = stack.pop();
        if (node.val >= currMax) count++;
        if (node.left) stack.push([node.left, Math.max(currMax, node.left.val)]);
        if (node.right) stack.push([node.right, Math.max(currMax, node.right.val)]);
    }
    return count;
};