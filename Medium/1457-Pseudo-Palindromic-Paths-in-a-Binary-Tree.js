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
 var pseudoPalindromicPaths  = function(root) {
    let paths = 0, stack = [[root, 0]];
  while (stack.length) {
    let [node, mask] = stack.pop();
    mask ^= (1 << node.val);
    if (!node.left && !node.right) {
      if (isPseudoPalindrome(mask)) paths++;
    }
    if (node.left) stack.push([node.left, mask]);
    if (node.right) stack.push([node.right, mask]);
  }
  return paths;
  
  function isPseudoPalindrome(mask) {
    let odd = 0;
    while (mask > 0) {
      odd += (mask & 1);
      mask >>= 1;
    }
    return odd < 2;
  }
};