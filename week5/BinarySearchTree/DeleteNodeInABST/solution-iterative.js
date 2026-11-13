/**
 * Fully iterative version - no recursion anywhere. First walks down with
 * an explicit loop to find the target node and its parent. If the target
 * has two children, walks further to find its in-order successor (and the
 * successor's own parent) iteratively, copies the successor's value up,
 * then splices the successor out directly (it has at most a right child).
 * Otherwise splices the target itself out using whichever child it has.
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let parent = null;
  let curr = root;

  while (curr && curr.val !== key) {
    parent = curr;
    curr = key < curr.val ? curr.left : curr.right;
  }

  if (!curr) return root;

  if (curr.left && curr.right) {
    let succParent = curr;
    let succ = curr.right;

    while (succ.left) {
      succParent = succ;
      succ = succ.left;
    }

    curr.val = succ.val;

    if (succParent.left === succ) succParent.left = succ.right;
    else succParent.right = succ.right;
  } else {
    const child = curr.left || curr.right;

    if (!parent) {
      root = child;
    } else if (parent.left === curr) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }

  return root;
};

module.exports = deleteNode;
