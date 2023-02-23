var express = require('express')

var app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index");
})

app.get('/questions', (req, res) => {
  


    res.render("startpage");

})

app.get('/leaderboard', (req, res) => {
  
  const fs = require('fs');
  let rawdata = fs.readFileSync('results.json');
  let items = JSON.parse(rawdata)["results"];
  items.sort(function(a, b){
    return b.marks-a.marks
})
  res.render("leaderboard", {items : items});

})
app.post('/instructions', (req, res) => {
  
  const fs = require('fs');
  console.log(req.body)
  fs.readFile("./name.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    var temp = JSON.parse(jsonString); //now it an object
    temp.name = req.body.candname;
    var newData = JSON.stringify(temp); //convert it back to json
    fs.writeFile("./name.json", newData, (err) => {
      // write it back
      // error checking
      if (err) throw err;
    });
  });


  let rawdata = fs.readFileSync('instructions.json');
  let items = JSON.parse(rawdata)["results"];
  console.log(items)
  res.render("instructions", {items : items});


})

app.post('/result', (req, res) => {
  const formatter = new Intl.DateTimeFormat('en-IN', {dateStyle:'short', timeStyle:'short'});
  console.log(req.body.violations)
  var subtime = formatter.format(new Date())
    const fs = require('fs');
    let rawdata = fs.readFileSync('data.json');
    let answers = JSON.parse(rawdata);
    var positiv = 0;
    var negativ = 0;


    for (let i=0; i<Object.keys(answers).length; i++){
        var qid = "q" + (i+1);
        if(req.body[qid]==undefined){
        }
        else{
            if(answers[i+1].ans == req.body[qid]){
               
                positiv += (answers[i+1].marks);

            }
            else{
                negativ += (answers[i+1].neg);

            }


        }
    }
    var totalm = positiv + negativ;
    let rawdata2 = fs.readFileSync('name.json');
    let candname = JSON.parse(rawdata2).name;
    fs.readFile("./results.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        temp = JSON.parse(jsonString);
        result = {
            name : candname,
            marks : totalm,
            time : subtime
        }
        temp.results.push(result);
        var newData = JSON.stringify(temp); //convert it back to json
        
        fs.writeFile("./results.json", newData, (err) => {
          // write it back
          // error checking
          if (err) throw err;
        });
      });


      res.render("result", {candnam : candname,subtime : subtime, posit : positiv, negat : negativ, marks : totalm});

})

app.post('/q2', (req, res) => {
  const fs = require('fs');
  let rawdata = fs.readFileSync('data.json');
  let answers = JSON.parse(rawdata);
  let rawdata2 = fs.readFileSync('time.json');
  let answers2 = JSON.parse(rawdata2);
  let candnam = fs.readFileSync('name.json');
  let candname = JSON.parse(candnam).name;
  var time = answers2.time;
 
/*
    */

    res.render("questions", {candname : candname, questions : answers, noofqs : Object.keys(answers).length, time : time});
    })


    
app.get('/admin', (req, res) => {
      res.render('admin')
        })
    
    
    
app.post('/time', (req, res) => {
  const fs = require('fs');
  let rawdata = fs.readFileSync('time.json');
  let answers = JSON.parse(rawdata);

    fs.readFile("./time.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        temp = JSON.parse(jsonString); //now it an object
        console.log(temp)
        temp.time = req.body.time;
        var newData = JSON.stringify(temp); //convert it back to json
        fs.writeFile("./time.json", newData, (err) => {
          // write it back
          // error checking
          if (err) throw err;
        });
      });

      res.send("Timer Set Successfully")
    })

    
app.post('/insinstr', (req, res) => {
      const fs = require('fs');
      
      fs.readFile("./instructions.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        temp = JSON.parse(jsonString);
        console.log(temp)
        result = {
            instruction : req.body.instruction
        }
        console.log(temp)

        temp.results.push(result);
        console.log(temp)

        var newData = JSON.stringify(temp); //convert it back to json
        
        fs.writeFile("./instructions.json", newData, (err) => {
          // write it back
          // error checking
          if (err) throw err;
        });
      });

      res.send("Instruction Inserted Successfully")
        })
    

app.listen(3000)        