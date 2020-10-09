"""
Given a binary tree root and an integer target, delete all the leaf nodes with
value target.

Note that once you delete a leaf node with value target, if it's parent node
becomes a leaf node and has the value target, it should also be deleted
(you need to continue doing that until you can't).
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __str__(self):
        return f"val: {self.val}\nleft: {self.left}\nright: {self.right}\n"

def remove_leaf_nodes(root, target):
    if not root:
        return None
    root.left = remove_leaf_nodes(root.left, target)
    root.right = remove_leaf_nodes(root.right, target)

    if (root.val == target and
        root.left == None and
        root.right == None):
        return None

    return root


root = TreeNode(val=1, left=TreeNode(val=2, left=TreeNode(val=2, left=None, right=None), right=None), right=TreeNode(val=3, left=TreeNode(val=2, left=None, right=None), right=TreeNode(val=4, left=None, right=None)))

remove_leaf_nodes(root, 2)

