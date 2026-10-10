/**
 * Running-sums list: instead of a hashmap of prefix-sum counts, carry down
 * an explicit array of "sum from each ancestor (inclusive) down to the
 * current node." At each node, every existing entry gets node.val added
 * (extending each ancestor's partial path by one more node), and a fresh
 * entry for the node by itself is appended. Counting how many entries
 * equal targetSum gives the number of valid paths ending at this node.
 *
 * Each recursive call passes its own updated array down, so there is
 * nothing to backtrack/undo on the way back up — the trade-off is copying
 * the whole array at every node instead of O(1) map updates.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  function dfs(node, sums) {
    if (!node) return 0;

    const updatedSums = sums.map((s) => s + node.val);
    updatedSums.push(node.val);

    let count = updatedSums.filter((s) => s === targetSum).length;

    count += dfs(node.left, updatedSums);
    count += dfs(node.right, updatedSums);

    return count;
  }

  return dfs(root, []);
};

module.exports = pathSum;
