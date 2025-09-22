class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  findMin() {
    if (this.left == null) return this.data;
    return this.left.findMin();
  }

  insert(data) {
    if (this.data == data) {
      throw new Error("Data already exist in this tree");
    } else if (this.data > data) {
      if (this.left != null) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else if (this.data < data) {
      if (this.right != null) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  delete(data) {
    if (data < this.data && this.left != null) {
      this.left = this.left.delete(data);
    } else if (data > this.data && this.right != null) {
      this.right = this.right.delete(data);
    } else {
      if (this.data == data) {
        if (this.right != null && this.left != null) {
          let min = this.right.findMin();
          this.data = min;
          this.right = this.right.delete(min);
        } else if (this.left != null) {
          return this.left;
        } else if (this.right != null) {
          return this.right;
        } else {
          return null;
        }
      }
    }
    return this;
  }

  find(value) {
    if (this.data == value) {
      return this;
    } else if (this.data > value) {
      if (this.left != null) {
        return this.left.find(value);
      } else {
        return false;
      }
    } else if (this.data < value) {
      if (this.right != null) {
        return this.right.find(value);
      } else {
        return false;
      }
    }
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(this.#removeDuplicates(array));
  }

  #removeDuplicates(array) {
    const uniq = [...new Set(array)];
    uniq.sort((a, b) => a - b);
    return uniq;
  }

  buildTree(array, left = 0, right = array.length - 1) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let root = new Node(array[mid]);
    root.left = this.buildTree(array, left, mid - 1);
    root.right = this.buildTree(array, mid + 1, right);

    return root;
  }

  insert(data) {
    this.root.insert(data);
  }

  delete(data) {
    if (this.root) {
      this.root = this.root.delete(data);
    }
  }

  find(value) {
    if (this.root != null) {
      return this.root.find(value);
    }
  }

  levelOrderForEach(callback) {
    if (callback == undefined) {
      throw new Error("Callback is required");
    } else if (this.root == null) {
      return;
    } else {
      const queues = [this.root];
      while (queues.length != 0) {
        const deque = queues.shift();
        if (deque.left != null) {
          queues.push(deque.left);
        }
        if (deque.right != null) {
          queues.push(deque.right);
        }
        callback(deque);
      }
    }
  }

  preOrderforEach(callback, node = this.root) {
    if (!callback) {
      throw new Error("Callback is required");
    }
    if (!node) {
      return;
    }
    callback(node);
    this.preOrderforEach(callback, node.left);
    this.preOrderforEach(callback, node.right);
  }
}

prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const myTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(prettyPrint(myTree.root));
console.log(myTree.levelOrderForEach((node) => console.log(node.data)));
console.log(myTree.preOrderforEach((node) => console.log(node.data)));
