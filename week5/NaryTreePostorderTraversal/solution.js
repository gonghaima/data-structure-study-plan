/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // TODO: Implement your solution here
  let result = [];

  function dfs(node) {
    if (!node) return;

    // Recursively process all children
    for (let child of node.children) {
      dfs(child);
    }
    result.push(node.val); // Process current node after all children
  }

  dfs(root);
  return result;
};

module.exports = postorder;
