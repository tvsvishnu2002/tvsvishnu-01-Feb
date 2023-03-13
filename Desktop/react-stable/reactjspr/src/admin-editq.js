import axios from 'axios'
import {Button, Menu, Dropdown, Input, Checkbox} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import {navbar} from './navbar'
import { Link, useParams } from 'react-router-dom';
function AdminEditq(props) {
 
  const [questions, setQuestions] = useState([]);
  const [qid, setQID] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]

      setQuestions(questions);


    }

    fetchData();
  }, []);
  const [currq, setQ] = useState("");
  const [questi, setquesti] = useState("");

  const [option1, setop1] = useState("");
  const [option2, setop2] = useState("");
  const [option3, setop3] = useState("");
  const [option4, setop4] = useState("");
  const [answ, setans] = useState("");

  const [positivem, setpos] = useState("");
  const [negativem, setneg] = useState("");
  const handlec = (e) => {
    setquesti(e.target.value)
  }


  
  const changeQ = (e) => {
var currqn = (e.target.value)

setQID(qid)
setquesti(questions[currqn].ques)
setQ(questions[currqn]._id)

setop1(questions[currqn].op1)
setop2(questions[currqn].op2)
setop3(questions[currqn].op3)
setop4(questions[currqn].op4)
setans(questions[currqn].ans)

setpos(questions[currqn].marks)
setneg(questions[currqn].neg)

  }
  
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
      <form action="/admin/editq" method="POST">
      <b>Select question to Edit : </b> 
      
      <select name="delquest" onChange={changeQ} required>
        <option value="" selected disabled hidden>Select</option>
        {questions.map((question, index) => (
          
          <option value={index} name={question._id}>{question.ques}</option>
        ))}
        </select>

<br></br><br></br>
 <input hidden readOnly name="currqid" value={currq} />
        <b>Enter a Question : </b> <Input placeholder='Question' name="quest" defaultValue={questi} /><br></br><br></br>
        <b>Enter Option A : </b> <Input placeholder='Option A' name="op1" defaultValue={option1} /><br></br><br></br>
        <b>Enter Option B : </b> <Input placeholder='Option B' name="op2" defaultValue={option2}/><br></br><br></br>
        <b>Enter Option C : </b> <Input placeholder='Option C' name="op3" defaultValue={option3}/><br></br><br></br>
        <b>Enter Option D : </b> <Input placeholder='Option D' name="op4" defaultValue={option4}/><br></br><br></br>
        <b>Enter Correct Option : </b> <Input placeholder='Answer' name="ans"defaultValue={answ} /><br></br><br></br>
        <b>Marks for Correct : </b> <Input placeholder='Marks' name="pos" defaultValue={positivem}/><br></br><br></br>
        <b>Negative Marking : </b> <Input placeholder='Negative Marks' name="neg" defaultValue={negativem}/><br></br><br></br>
        <input type="checkbox" class="ui checkbox" name='deleteqq'></input> 
        <label>Check this for deleting the question</label>


<br></br>
<br></br>
        <Button content='Submit' primary />
        </form>
    </div>
  );

}

export default AdminEditq;
