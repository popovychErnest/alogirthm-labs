class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }
        insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else  {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }   
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {

            // 1
            if (node.left === null && node.right === null) {
                node = null; 
                return node;
            }

            // 2
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // 3
            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);

            return node;
        }
    }
    findMinNode(node) {
            if (node.left === null) {
                return node;
            }
            else {
                return this.findMinNode(node.left);
            }
     }
    getRootNode() {
        return this.root;
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    changeToZero(node) {
        if (node !== null) {
            this.changeToZero(node.left);
            const strNode = node.data.toString();
            if (strNode.length != 1) {
                const setStr = new Set(strNode);
                if (setStr.size === 1) {
                    node.data = 0;
            }
         }
         this.changeToZero(node.right);
        }
    }
     sumSubTree(node) {
        if (node === null) {
            return 0;
        }
        const sumOfLeft = this.sumSubTree(node.left);
        const sumOfRight = this.sumSubTree(node.right);
    
        if (Math.abs(sumOfLeft - sumOfRight) > 20) {
            console.log("Node:", node.data, "; Sum of laft: ",sumOfLeft, "; sum of rigth: ",sumOfRight, "\n");
        }
        return node.data + sumOfLeft + sumOfRight;
    }    
    addRandomInTree(max) {
        return Math.floor(Math.random() * (max * 2)) - max;
    }
}

const task6 = () => {
    let BST  = new BinarySearchTree();
        
      //                              BST.insert(10);
       //     BST.insert(9);                       BST.insert(15);
//BST.insert(8);                       BST.insert(11);                   
                //                                BST.insert(14);
    
const size = 15;
for (let i  = 0; i < size; i++) {
    BST.insert(BST.addRandomInTree(20));
}
    let root = BST.getRootNode();
    console.log("\nInitial binary tree:");
    console.log(root);

    console.log(` \n\ndeleting ${root.data} (root):`);
    BST.remove(root.data);
    console.log(root);

    
    console.log("\n\nTask 1 of 9 variant: (if  node.data = 11, 22, 33, 44, 55,.... -> 0)");
    BST.changeToZero(root);
    console.log(root);

    console.log("\nIn-order tree travesal:");
    BST.inorder(root);

    console.log("\n\nTask 2 of 9 variant:")
    BST.sumSubTree(root); 
}
task6();