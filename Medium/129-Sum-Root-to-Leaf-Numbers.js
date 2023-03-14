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
const sumNumbers = function(root) {
    const sum = []
    rec(root, '', sum)
    return sum.reduce((ac, el) => ac + el, 0)
};

function rec(node, str, arr) {
    if (node == null) {
        arr.push(+str)
        return
    }
    if (node.left !== null) {
      rec(node.left, str + node.val, arr)
    }
    if (node.right !== null) {
       rec(node.right, str + node.val, arr)
    }
    if (node.left === null && node.right === null) {
        arr.push(+(str + node.val) )
    }
}