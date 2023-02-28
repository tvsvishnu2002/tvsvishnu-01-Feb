var express = require('express')

var app = express()
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/newdb", {useNewUrlParser: true});

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const questionSchema = {
    ques: String,
    op1: String,
    op2: String,
    op3: String,
    op4: String,
    ans: String,
    marks: Number,
    neg: Number,
    };
const detailsModel = mongoose.models.detailsModel || mongoose.model('questions', questionSchema);
const instrSchema = {
      instruction : String
      };
const instrModel = mongoose.models.instrModel || mongoose.model('instructions', instrSchema);
      const timeSchema = {
        time : Number
        };
        const timeModel = mongoose.models.timeModel || mongoose.model('times', timeSchema);
        const nameSchema = {
          candname : String
          };
          const nameModel = mongoose.models.nameModel || mongoose.model('names', nameSchema);
          const resultSchema = {
            candname : String,
            marks : Number,
            time : String

            };
            const resultModel = mongoose.models.resultModel || mongoose.model('results', resultSchema);
  


    
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index");
})

app.get('/candidate', (req, res) => {
  


    res.render("startpage");

})

app.get('/leaderboard', (req, res) => {
  

  resultModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
      var items = allDetails;
      items.sort(function(a, b){
        return b.marks-a.marks
    })
      res.render("leaderboard", {items : items});
    
    }});
  
})
app.post('/candidate/instructions', (req, res) => {
  instrModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
      nameModel.deleteOne({}, function (err, allDetails2) {
        if (err) {
            console.log(err);
        } else {
          const name = new nameModel({
            candname : req.body.candname
            
          });
          name.save(function (err) {
            if (err) {
              throw err;
            } else {
              console.log(allDetails)
              res.render("instructions", {items : allDetails})
            }
          });    }
    
        
      });
    

    }
  });
})

app.post('/candidate/result', (req, res) => {
  const fs = require('fs');


  detailsModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
var answers = allDetails;
const formatter = new Intl.DateTimeFormat('en-IN', {dateStyle:'short', timeStyle:'short'});
var subtime = formatter.format(new Date())

  var positiv = 0;
  var negativ = 0;
  console.log(answers[0])

  for (let i=0; i<answers.length; i++){
      var qid = "q" + (i+1);
      console.log(answers[i].ans)
      console.log(req.body[qid])
      if(req.body[qid]==undefined){
      }
      else{
          if(answers[i].ans == req.body[qid]){
             console.log(answers[i].ans)
             console.log(req.body[qid])
              positiv += (answers[i].marks);

          }
          else{
              negativ += (answers[i].neg);

          }


      }
  }
  var totalm = positiv + negativ;
  nameModel.find({}, function (err, allDetails4) {
    if (err) {
        console.log(err);
    } else {
      var candname = allDetails4[0].candname;
   

 
const result = new resultModel({
  candname : candname,
  marks : totalm,
  time : subtime,
  
  
});
result.save(function (err) {
  if (err) {
    throw err;
  } else {
    res.render("result", {candnam : candname,subtime : subtime, posit : positiv, negat : negativ, marks : totalm});
  }
});

      }
    });
  
  
} });
  })





app.post('/candidate/questions', (req, res) => {
  
  detailsModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
      timeModel.find({}, function (err, allDetails2) {
        if (err) {
            console.log(err);
        } else {
          nameModel.find({}, function (err, allDetails3) {
            if (err) {
                console.log(err);
            } else {






          res.render("questions", { candname : allDetails3[0].candname, questions : allDetails, noofqs : allDetails.length, time : allDetails2[0].time})
            }
          });
        }
    })
    }
})
 })


    
app.get('/admin', (req, res) => {
  detailsModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
      console.log(allDetails)
      res.render('admin', {allDetails : allDetails})

    }
  
  });



        })
    
    
app.post('/admin/instime', (req, res) => {

  timeModel.deleteOne({}, function (err, allDetails2) {
    if (err) {
        console.log(err);
    } else {
      const time = new timeModel({
        time : req.body.time
        
      });
      time.save(function (err) {
        if (err) {
          throw err;
        } else {
          res.send("Timer Set Successfully")
        }
      });    }
})

})
 
app.post('/admin/deleteq', (req, res) => {
console.log(req.body)
  detailsModel.deleteOne({ _id : req.body.delquest}, function (err, allDetails2) {
    if (err) {
        console.log(err);
    } else {
      
          res.send("Timer Set Successfully")
        }
          });


})
    
app.post('/admin/insinstr', (req, res) => {

    
  const instructions = new instrModel({
    instruction : req.body.instruction
    
  });
  instructions.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.send("Instruction Inserted Successfully")
    }
  });

})
    



        
app.post('/admin/insq', (req, res) => {

    
const question = new detailsModel({
  ques : req.body.quest,
  op1 : req.body.op1,
  op2 : req.body.op2,
  op3 : req.body.op3,
  op4 : req.body.op4,
  ans : req.body.ans,
  marks : req.body.pos,
  neg : req.body.neg,
	
});
question.save(function (err) {
	if (err) {
		throw err;
	} else {
    res.send("Question Inserted Successfully")
	}
});

    })

app.listen(3000)        