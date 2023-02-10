//Question 9 : Lets say you have array of objects drop last 5 players whose avg run scoring is less in overall batsmen


//Function for sorting according to runs
const bymarks = R.descend(R.prop('runs'));

//Initialising Object
const input_array =  [{ name: 'Cricketer 1', runs: 55.5 },
                      { name: 'Cricketer 2', runs: 68 },
                      { name: 'Cricketer 3', runs: 72 },
                      { name: 'Cricketer 4', runs: 42 },
                      { name: 'Cricketer 5', runs: 28 },
                      { name: 'Cricketer 6', runs: 98 },
                      { name: 'Cricketer 7', runs: 71 },
                      { name: 'Cricketer 8', runs: 62 },
                      { name: 'Cricketer 9', runs: 51.5 },
                      { name: 'Cricketer 10', runs: 91 },
                      { name: 'Cricketer 11', runs: 12 },
                      { name: 'Cricketer 12', runs: 22 },
                      { name: 'Cricketer 13', runs: 32 },
                      { name: 'Cricketer 14', runs: 28 },
                      { name: 'Cricketer 15', runs: 35 },
                     ];

//Sorted
const sorted_acc_to_runs = R.sort(bymarks, input_array);

//Function for deleting last 5 elements
const team_after_dropped = R.dropLast(5, sorted_acc_to_runs);

//Display Remaining elements
team_after_dropped