/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  var result = [];
  if (!root) return [];
  preOrderHelper(root);
  return result;

  function preOrderHelper(node) {
    if (!node) return;
    result.push(node.val);
    if (!node.children) return;

    for (var i = 0; i < node.children.length; i++) {
      preOrderHelper(node.children[i]);
    }


  }
};
preorder([1, null, 3, 2, 4, null, 5, 6]);

