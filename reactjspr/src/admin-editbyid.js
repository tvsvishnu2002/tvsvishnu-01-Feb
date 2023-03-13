import axios from 'axios'
import { Button, Menu, Grid, Segment ,Dropdown, Input, Checkbox } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { navbar } from './navbar'
import { Link, useParams } from 'react-router-dom';
function AdminEditbyid(props) {
  var qidd = useParams()

  var qidmain = qidd.qidd
  console.log(qidmain)
  const [qidddd, setQID] = useState(false);

  const [questions, setQuestions] = useState(false);
  function fetchData() {
    axios.get('/candidate/questionsapi').then(
      response => {
        console.log("inn");
        setQID(qidmain)
        setQuestions(response.data["questions"]);
      }).then(
        ()=>{
          console.log(questions);
        }
      )

  }
  useEffect(fetchData, [])

  useEffect(()=>{},[questions])




  return (
    <div>
      <h1>Admin Page - Edit Question</h1><navbar />
      <Menu>
        <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
        <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
        <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
        <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
        <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
        <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

      </Menu>
      {questions ? <form action="/admin/editq" method="POST">



        <br></br><br></br>
        <input hidden readOnly name="currqid" value= {questions[qidddd]._id}/>
        <b>Enter a Question : </b> <Input placeholder='Question' name="quest" defaultValue={questions[qidddd].ques} /><br></br><br></br>
        <b>Enter Option A : </b> <Input placeholder='Option A' name="op1" defaultValue={questions[qidddd].op1} /><br></br><br></br>
        <b>Enter Option B : </b> <Input placeholder='Option B' name="op2" defaultValue={questions[qidddd].op2} /><br></br><br></br>
        <b>Enter Option C : </b> <Input placeholder='Option C' name="op3" defaultValue={questions[qidddd].op3} /><br></br><br></br>
        <b>Enter Option D : </b> <Input placeholder='Option D' name="op4" defaultValue={questions[qidddd].op4} /><br></br><br></br>
        <b>Enter Correct Option : </b> <Input placeholder='Answer' name="ans" defaultValue={questions[qidddd].ans} /><br></br><br></br>
        <b>Marks for Correct : </b> <Input placeholder='Marks' name="pos" defaultValue={questions[qidddd].marks} /><br></br><br></br>
        <b>Negative Marking : </b> <Input placeholder='Negative Marks' name="neg" defaultValue={questions[qidddd].neg} /><br></br><br></br>
        <input type="checkbox" class="ui checkbox" name='deleteqq'></input>
        <label>Check this for deleting the question</label>


        <br></br>
        <br></br>
      
        <Button content='Submit' primary />
      </form> : <h1>Loading ... </h1>}
    </div>
  );

}

export default AdminEditbyid;
