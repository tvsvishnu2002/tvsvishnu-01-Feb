//Question 2 : Lets say you have objects with keys {name:"",address:"",phone:"" .........} remove these three fileds from the given object

//Initialising Object
const objj = {name:"Name 1", address:"Sample Address", phone: "1234", area:"Area 1", door_no:"123"};

//Removing name field from given object
const objj_without_name = R.dissoc('name', objj); 

//Removing address field from given object
const objj_without_address = R.dissoc('address', objj_without_name); 

//Removing phone field from given object
const answer = R.dissoc('phone', objj_without_address); 
answer