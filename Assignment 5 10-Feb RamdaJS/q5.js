//Question 5 : Lets say you have array of objects (user details), new array value should have user details only whose completedTask >=50

//Filter function for generating tasks with >50%
const isGreaterthan50 = n => n.task > 50;
//Call function
R.filter(isGreaterthan50, [{name : "Name 1", task : 50}, 
                 {name : "Name 2", task : 60}, 
                 {name : "Name 3", task : 70}, 
                 {name : "Name 4", task : 40}, 
                 {name : "Name 5", task : 80}, 
                 {name : "Name 6", task : 90},]);