

st(root){
	dfs(node){
		if(!node) return new TreeNode();
		const left = dfs(node.left)
		const right = dfs(node.right)
		if(left.val!==right.val) return false;
	}
	return true;
}

bfs


st(root){
	allNodes = [];
	currentNodes = [[root]];
	while(currentNodes.length){
		traverseNodes = currenNodes.pop();
		nextNodes = [];
		tmp = [];
		allNull = true;
		for (i=0; i<traverseNodes.length; i++){
			const currentNode = traverseNodes[i];
			tmp.push(currentNode.val)
			if(currentNode.val || currentNode.val === 0){
				allNull = false;
			}
			if(currentNode.left || currentNode.right){
				nextNodes.push(currentNode.left || null);
				nextNodes.push(currentNode.right || null);
			}
		}
		allNodes.push(tmp);
	}
}



var isSymmetric = function(root) {
	ldfs(node){
		if(!node) return new TreeNode();
		const left = ldfs(node.left)
		const right = ldfs(node.right)
		if(left.val!==right.val) return false;
	}
	rdfs(node){
		if(!node) return new TreeNode();
		const right = rdfs(node.right)
		const left = rdfs(node.left)
		if(left.val!==right.val) return false;
	}
	dfs(root);
	return true;
}

