//Question 8 : Lets say you have array of objects (students marks details {name:'',marks:''.....}) , get the student details who have scored least in the class

//Function to sort according to marks
const bymarks = R.ascend(R.prop('marks'));

//Initialising object
const input_array =  [{ name: 'Student 1', marks: 78 },{ name: 'Student 2', marks: 79 },{ name: 'Student 3', marks: 71 },{ name: 'Student 4', marks: 76 },];

//Sorted
const sorted_acc_to_marks = R.sort(bymarks, input_array);

//Display 1st name
sorted_acc_to_marks[0].name