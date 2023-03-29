import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import { Menu, Button, Grid, Segment, Container, Image } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import AdminEditq from './admin-editq';
import navbar from './navbar';
import AdminEditbyid from './admin-editbyid';
import { logout } from './functions/auth';
import { useDispatch } from 'react-redux';
import { setAdmin, setLogins } from './reducers/globalStates';
import Navbar from './components/navbar';
import NAvbar from './navbar';
function AdminHome() {

  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]
      const timeinmin = response.data["time"]
      setQuestions(questions)
      setTime(timeinmin)

    }

    fetchData();
  }, [questions]);
  const dispatcher = useDispatch()
  const navigate = useNavigate()
  const destroySession = async () => {
    let flag = await logout();
    if (flag === true) {
      dispatcher(setLogins(false, null), setAdmin(false));
      navigate("/objectivetest/authenticate");
    } else {
      return false;
    }
  };
  const handleDel = (e) => {
    var qid = e;
    axios.post('/admin/deleteq', { delquest: qid }).then((data) => {
      console.log("Hi")
      console.log("deleted")
      const response = axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]
      setQuestions(questions)
      
    })

  }
  var history = useNavigate();

  const handleEdit = (e) => {
    
    var qid2 = e;
    history('/admin/editquestion2/' + qid2)
  }

  return (
    <center>
    <div>
      <h1>Admin - Home</h1>
      <NAvbar /> 
      




      <h3>Admin - Home Page</h3><hr></hr>
      <h3>Test Configuration</h3>
      <h3>Timer Set : {time} minutes</h3>
      <h3>Total No. of Questions : {questions.length}</h3>

      <hr></hr>
      <h2>Questions</h2>
      <Container textAlign='justify'>
        <Grid columns='1'>
          {questions.map((question, index) => (
            <>
              <Grid.Row stretched>
                <Grid.Column width={10}>
                  <Segment>

                    <h4>Question {index + 1}&nbsp;&nbsp;&nbsp; <Button name={index} onClick={()=> handleEdit(index)} icon='edit' positive /><Button name={question._id} icon='delete' onClick={() => handleDel(question._id)} negative /><br></br><br></br>{question.ques} </h4>
                    <Grid columns='equal'>
                      <Grid.Row stretched>
                        <Grid.Column>
                          <Segment><b>Option 1 :</b> {question.op1}</Segment>
                          <Segment><b>Option 3 :</b> {question.op3}</Segment>
                          <Segment><b>Marks :</b> {question.marks}</Segment>

                        </Grid.Column>

                        <Grid.Column>
                          <Segment><b>Option 2 :</b> {question.op2}</Segment>
                          <Segment><b>Option 4 :</b> {question.op4}</Segment>
                          <Segment><b>Negative Marking :</b> {question.neg}</Segment>

                        </Grid.Column>
                      </Grid.Row>

                    </Grid>







                  </Segment>
                </Grid.Column>

              </Grid.Row>
              <hr></hr>

            </>



          ))}
        </Grid></Container>
    </div></center>
  )

}
export default AdminHome;