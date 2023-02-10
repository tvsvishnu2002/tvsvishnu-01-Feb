//Question 3 : Concat two array of objects and sort (asc) it based on "cost" key

//Sort according to cost
const byCost = R.ascend(R.prop('cost'));

//Example Array 1
const first_array = [{ name: 'Name 1', cost: 70 },];
//Example Array 2
const second_array = [{ name: 'Name 2', cost: 78 },];
//Example Array 3
const third_array = [{ name: 'Name 3', cost: 74 },];
//Concatenating Array 1 and Array 2
const fourth_array = R.concat(first_array, second_array)

//Concatenating Array 3 and concatenation
const concatenated_array = R.concat(third_array, fourth_array)

//Calling the sort function
const sorted_acc_to_cost = R.sort(byCost, concatenated_array);
console.log(sorted_acc_to_cost)