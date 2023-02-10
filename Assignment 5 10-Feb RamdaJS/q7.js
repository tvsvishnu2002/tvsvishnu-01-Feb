//Question 7 : Lets say you have arr1=[1,2,3,4,5,6] and arr2=[3,7,2,9,10,53] , all even element should be on left and old on right (into single array)

//Array 1
var arr1 = [1,12,3,14,15,62,71,80,19]

//Array 2
var arr2 = [21,2,31,4,16,26,17,20,50]

//Function for finding if integer is even or not
const isEven = n => n % 2 === 0;
//Function for finding if integer is even or not
const isOdd = n => n % 2 === 1;

//List of even elements in first array
const first_array_even = R.filter(isEven, arr1); 
//List of odd elements in first array
const first_array_odd = R.filter(isOdd, arr1);
//List of even elements in second array
const second_array_even = R.filter(isEven, arr2); 
//List of odd elements in second array
const second_array_odd = R.filter(isOdd, arr2); 

//All even list
const all_even = R.concat(first_array_even, second_array_even); 
//All odd list
const all_odd = R.concat(first_array_odd, second_array_odd); 

//Concatenate both lists
const final_answer = R.concat(all_even, all_odd); 

final_answer