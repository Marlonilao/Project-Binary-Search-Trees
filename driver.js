import { Tree, prettyPrint } from "./bst.js";

function generateRandomNumbers(max = 10) {
  const array = [];
  for (let i = 0; i < max; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
  }
  return array;
}
console.log(
  "Step 1: Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish. \n"
);
const myTree = new Tree(generateRandomNumbers());
prettyPrint(myTree.root);

console.log(
  "\nStep 2: Confirm that the tree is balanced by calling isBalanced."
);
console.log(`isBalance(myTree): ${myTree.isBalance()}`);

console.log(
  "\nStep 3: Print out all elements in level, pre, post, and in order."
);

const levelOrderArray = [];
myTree.levelOrderForEach((node) => {
  levelOrderArray.push(node.data);
});

const preOrderArray = [];
myTree.preOrderforEach(function (node) {
  preOrderArray.push(node.data);
});

const postOrderArray = [];
myTree.postOrderforEach((node) => {
  postOrderArray.push(node.data);
});

const inOrderArray = [];
myTree.inOrderforEach((node) => {
  inOrderArray.push(node.data);
});

console.log(`\nlevelOrder = ${levelOrderArray}`);
console.log(`\preOrder = ${preOrderArray}`);
console.log(`postOrder = ${postOrderArray}`);
console.log(`inOrder = ${inOrderArray}`);

console.log("\nStep 4: Unbalance the tree by adding several numbers > 100.");
console.log("--inserting 101, 102, 103, 104, 105--");
myTree.insert(101);
myTree.insert(102);
myTree.insert(103);
myTree.insert(104);
myTree.insert(105);
prettyPrint(myTree.root);

console.log(
  "\nStep 5: Confirm that the tree is unbalanced by calling isBalanced."
);
console.log(`isBalanced(myTree): ${myTree.isBalance()}`);

console.log("\nStep 6: Balance the tree by calling rebalance.");
console.log("(calls myTree.reBalance())");
myTree.reBalance();

console.log(
  "\nStep 7: Confirm that the tree is balanced by calling isBalanced."
);

console.log(`isBalance(myTree): ${myTree.isBalance()}\n`);
prettyPrint(myTree.root);

console.log(
  "\nStep 8: Print out all elements in level, pre, post, and in order."
);

const levelOrderArray2nd = [];
myTree.levelOrderForEach((node) => {
  levelOrderArray2nd.push(node.data);
});

const preOrderArray2nd = [];
myTree.preOrderforEach(function (node) {
  preOrderArray2nd.push(node.data);
});

const postOrderArray2nd = [];
myTree.postOrderforEach((node) => {
  postOrderArray2nd.push(node.data);
});

const inOrderArray2nd = [];
myTree.inOrderforEach((node) => {
  inOrderArray2nd.push(node.data);
});

console.log(`\nlevelOrder = ${levelOrderArray2nd}`);
console.log(`preOrder = ${preOrderArray2nd}`);
console.log(`postOrder = ${postOrderArray2nd}`);
console.log(`inOrder = ${inOrderArray2nd}`);

console.log("\n\n* END *");
