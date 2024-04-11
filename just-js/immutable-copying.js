var nums = [1, 2, 3];
var numsCopy = nums;

numsCopy.push(4);
console.log(numsCopy);
console.log(nums); //original changed

var numsCopy2 = [...nums];
numsCopy2.push(5);
console.log(numsCopy2);
console.log(nums); //original UNaffected

var numsCopy3 = [...numsCopy2, 6];
console.log(numsCopy3);

var numsCopy4 = [0, ...numsCopy3];
console.log(numsCopy4);

var nestedNums = [1, 2, [3, 4]];
var nestedNumsCopy = [...nestedNums];
// nestedNumsCopy.push(5);
console.log(nestedNumsCopy);
console.log(nestedNums);

nestedNumsCopy[2].push(5);
console.log(nestedNumsCopy);
console.log(nestedNums);

var nestedNumsDeepCopy = [nestedNums[0], nestedNums[1], [...nestedNums[2]]];
console.log(nestedNums);
console.log(nestedNumsDeepCopy);
nestedNumsDeepCopy[2].push(6);
console.log(nestedNums); //original unchanged
console.log(nestedNumsDeepCopy);
