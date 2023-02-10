//Question 1 : Sort (desc) array of objects based startDate key ex-obj {task:'TASK_NAME',startDate:'22-3-2021',endDate:'25-4-2021'}

//Initialising tasks array

const tasks = [
    {task:'1',startDate:'Mar 10 2023 ',endDate:'1'},
    {task:'2',startDate:'Mar 2 9923',endDate:'2'},
    {task:'3',startDate:'Mar 4 2992',endDate:'3'},
  ];
  
//Function for finding which is earlier date
  const diff = function sortFunction(a,b){  
      var dateA = new Date(a.startDate).getTime();
      var dateB = new Date(b.startDate).getTime();
      return dateA > dateB ? 1 : -1;  
  }; 
  
  //Sorting the tasks in ascending order
  const sorted_ascending = R.sort(diff, tasks);

  //Reverse the array
  const sorted = R.reverse(sorted_ascending)
  sorted
  