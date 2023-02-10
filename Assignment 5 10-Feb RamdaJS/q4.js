//Question 4 : Lets say you have array of objects , find object which has "userId"==="INPUT_USERID"

//Taking input from the user
var user_id = prompt("Enter User Id");

//Initialising student details object
const student_details = [{u_id: "101", name:"Name of Student 1"},
                        {u_id: "102", name:"Name of Student 2"},
                      {u_id: "103", name:"Name of Student 3"} ];

//Display details of student with given User Id
R.find(R.propEq("u_id", user_id))(student_details); 