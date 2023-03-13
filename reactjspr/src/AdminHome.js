import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'
import {Menu, Button, Grid, Segment, Container, Image} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import AdminEditq from './admin-editq';
import navbar from './navbar';
import AdminEditbyid from './admin-editbyid';
function AdminHome(){

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

    const handleDel = (e) => {
        var qid = e.target.name;
        axios.post('/admin/deleteq', {delquest : qid}).then((data) => {
          console.log("Hi")
          console.log("deleted")
        const response = axios.get('/candidate/questionsapi');
        const questions = response.data["questions"]
        setQuestions(questions)
        })
        
    }
    var history = useNavigate();

    const handleEdit = (e) => {
      var qid2 = e.target.name;
      history('/admin/editquestion2/'+qid2)
  }
    
    return (
        <div>
            <h1>Admin - Home</h1>
            <navbar />
            <Routes>
                    <Route path='/admin' element={<AdminHome /> }/>
                    <Route path='/admin/instime' element={<AdminInsTime />} />
                    <Route path='/admin/insques' element={<AdminInsQ />} />
                    <Route path='/admin/insinstruction' element={<AdminInsInstr />} />
                    <Route path='/admin/delquestion' element={<AdminDelq />} />
                    <Route path='/admin/editquestion' element={<AdminEditq />} />
                    <Route path='/admin/editquestion2/:qidd' element={<AdminEditbyid />} />

 
                </Routes>
                <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

                </Menu>




            <h3>Admin - Home Page</h3><hr></hr>
            <h3>Test Configuration</h3>
            <h3>Timer Set : {time} minutes</h3>
            <h3>Total No. of Questions : {questions.length}</h3>

            <hr></hr>
            <h2>Questions</h2>
<Container textAlign='center'>
            <Grid columns='1'>
            {questions.map((question, index) => (
               <> 
                   <Grid.Row stretched>
                   <Grid.Column width={10}>
                   <Segment>

                <h4>Question {index + 1}&nbsp;&nbsp;&nbsp; <Button name={index} onClick = {handleEdit} icon='edit' positive/><Button name={question._id} icon='delete' onClick={handleDel} negative/><br></br><br></br>{question.ques} </h4>
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
        </div>
    )

}
export default AdminHome;