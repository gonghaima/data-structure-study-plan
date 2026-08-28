class Solution:
    def diameterOfBinaryTree(self, root) -> int:
        self.max = 0

        def depth(node):
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            self.max = max(self.max, left + right)
            return 1 + max(left, right)

        depth(root)
        return self.max
