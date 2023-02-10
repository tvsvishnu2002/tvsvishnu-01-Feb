//Question 2 : Lets say you have objects with keys {name:"",address:"",phone:"" .........} remove these three fileds from the given object

//Function to remove name field from given object
const removeName = x => R.dissoc('name', x);
//Function to remove address field from given object
const removeAddress = x => R.dissoc('address', x);
//Function to remove phone field from given object
const removePhone = x => R.dissoc('phone', x);

//Initialising an object
const objj = [{name:"Name 1", address:"Sample Address 1", phone: "1234", area:"Area 1", door_no:"123"},
             {name:"Name 2", address:"Sample Address 2", phone: "1235", area:"Area 2", door_no:"124"},
             {name:"Name 3", address:"Sample Address 3", phone: "1236", area:"Area 3", door_no:"125"},
             {name:"Name 4", address:"Sample Address 4", phone: "1237", area:"Area 4", door_no:"126"},
             {name:"Name 5", address:"Sample Address 5", phone: "1238", area:"Area 5", door_no:"127"},]

//Calling function for removing name
const obj_without_name = R.map(removeName, objj);
//Calling function for removing Address
const obj_without_address = R.map(removeAddress, obj_without_name);
//Calling function for removing Phone
const answer = R.map(removePhone, obj_without_address);
answer
