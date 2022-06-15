function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i++; j < array.length; j++) {
      if (array[j] === target - array[i]) {
        return true
      };
    };
    return null
  };
};

/* 
  Write the Big O time complexity of your function here
*/

/* 
  loop through each element n
  nest another loop that looks for a value equal to (target - n)
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
