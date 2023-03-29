import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Button, Modal,Icon, Input,Header,  Grid, Image, Form, Radio, Container } from 'semantic-ui-react'
import { useFullScreenHandle } from 'react-full-screen';
import Cookies from 'universal-cookie';
import NAvbar from './navbar';
import { handleRef } from '@fluentui/react-component-ref';
function CandidateQuestions(props) {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0)
  const [currqno, setcurrqno] = useState(0);
  var cook = new Cookies()
  var uname = cook.get("username")
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]
      const timeinsec = response.data["time"] * 60
      setCount(timeinsec)
      setQuestions(questions);
      setquesti(questions[currqno].ques)

      setop1(questions[currqno].op1)
      setop2(questions[currqno].op2)
      setop3(questions[currqno].op3)
      setop4(questions[currqno].op4)
      setpos(questions[currqno].marks)
      setneg(questions[currqno].neg)

    }

    fetchData();
  }, []);
  const [questi, setquesti] = useState("");
  const [open, setOpen] = React.useState(false)

  const [option1, setop1] = useState("");
  const [option2, setop2] = useState("");
  const [option3, setop3] = useState("");
  const [option4, setop4] = useState("");
  const [positivem, setpos] = useState("");
  const [negativem, setneg] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setCount((oldCount) => oldCount - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  const formRef = useRef(null);

  useEffect(() => {

    if (count < 0) {
      console.log(formData)
    axios.post('/candidate/result', formData).then((response) => {
      console.log(response)
      var total = response.data.marks
      history('/candidate/result2', {state: total})
    })
      //handleSub();
      //formRef.current.submit();
    }
  }, [count])
  const history = useNavigate()
  const [formData, setFormdata] = useState({candname : uname})
  const handleChange = (e) => {
    setFormdata({ ...formData, [parseInt(e.target.name) + 1]: e.target.value });
  }
  function handleSub(e) {
    e.preventDefault()

    console.log(formData)
    axios.post('/candidate/result', formData).then((response) => {
      console.log(response)
      var total = response.data.marks
      history('/candidate/result2', {state: total})
    })
  }
  var nav = useNavigate()
  const [lastClicked, setlastclicked] = useState(0)
  const displayQ = (e) => {
    e.preventDefault()
    setlastclicked(e.target.name)

    const releventDiv = document.getElementById(e.target.name);
    releventDiv.scrollIntoView({behavior: "smooth"});
    // var currqn = e.target.name
    // setcurrqno(e.target.name)
    // setquesti(questions[currqn].ques)


    // setop1(questions[currqn].op1)
    // setop2(questions[currqn].op2)
    // setop3(questions[currqn].op3)
    // setop4(questions[currqn].op4)
    // setpos(questions[currqn].marks)
    // setneg(questions[currqn].neg)



  }

  return (
<center>
    <div>
      
      <h1>Candidate - Questions</h1>

      <h2>Timer : {Math.floor(count / 60)}:
        {count - (Math.floor(count / 60) * 60) >= 10 ? count - (Math.floor(count / 60) * 60) : <><>0</><>{count - (Math.floor(count / 60) * 60)}</></>}


      </h2>    

      <NAvbar/><br></br>
      {/* <Container textAlign='left'> */}
        <Form onSubmit={handleSub} method='post'>

<input type="text" name="candname" defaultValue={uname} hidden />
          <Grid>
            <Grid.Column width={13}>

              <>
              <Container textAlign='left'>
              
              {questions.map((question, index) => (
<div id={index}>
<h3>   Question {parseInt(index) + 1} : {question.ques}</h3>
                <b>  Marks : {question.marks}</b> <br></br>

                <b>   Negative Marks : {question.neg}</b>
                <br></br>
                <br></br>
                {/* <Radio onChange={handleChange} name={index} value='A' label={question.op1} /><br></br><br></br>
                <Radio onChange={handleChange} name={index} value='B' label={question.op2} /><br></br><br></br>
                <Radio onChange={handleChange} name={index} value='C' label={question.op3} /><br></br><br></br>
                <Radio onChange={handleChange} name={index} value='D' label={question.op4} /> */}


                <div class="ui radio checkbox"><input onChange={handleChange} name={index} value='A' type="radio" readonly="" tabindex="0"/><label>{question.op1}</label></div>
                <br></br> <br></br>    <div class="ui radio checkbox"><input onChange={handleChange} name={index} value='B' type="radio" readonly="" tabindex="0"/><label>{question.op2}</label></div>
                <br></br><br></br>   <div class="ui radio checkbox"><input onChange={handleChange} name={index} value='C' type="radio" readonly="" tabindex="0"/><label>{question.op3}</label></div>
                <br></br><br></br>   <div class="ui radio checkbox"><input onChange={handleChange} name={index} value='D' type="radio" readonly="" tabindex="0"/><label>{question.op4}</label></div>

          
           {/* <Input type="radio" onChange={handleChange} name={index} value='A'/> {question.op1} <br></br><br></br>
                <Input type="radio" onChange={handleChange} name={index} value='B'/> {question.op2}<br></br><br></br>
                <Input type="radio" onChange={handleChange} name={index} value='C'/>{question.op3}<br></br><br></br>
                <Input type="radio" onChange={handleChange} name={index} value='D'/> {question.op4}<br></br><br></br> */}
                <hr></hr>

                </div>
))}
{/* 
<h3>   Question {parseInt(currqno) + 1} : {questi}</h3>
                <b>  Marks : {positivem}</b> <br></br>

                <b>   Negative Marks : {negativem}</b>
                <br></br>
                <br></br>

                <Input type="radio" onChange={handleChange} name={currqno} value='A'/> {option1} <br></br><br></br>
                <Input type="radio" onChange={handleChange} name={currqno} value='B'/> {option2}<br></br><br></br>
                <Input type="radio" onChange={handleChange} name={currqno} value='C'/>{option3}<br></br><br></br>
                <Input type="radio" onChange={handleChange} name={currqno} value='D'/> {option4}<br></br><br></br>
                <hr></hr>

                 */}
             </Container> </>
            </Grid.Column>
            <Grid.Column width={3} style={{marginLeft : "1100px", position : "fixed"}}>
            <Icon name="user circle" />{uname}<hr></hr>
            <h3>Timer : {Math.floor(count / 60)}:
    {count - (Math.floor(count / 60) * 60) >= 10 ? count - (Math.floor(count / 60) * 60) : <><>0</><>{count - (Math.floor(count / 60) * 60)}</></>}
</h3><hr></hr>

{questions.map((question, index) => (
<>
{index % 4 !== 3 ? <Button name={index} id = {index} active = {lastClicked == index} toggle onClick={displayQ}>{index + 1}</Button> 
 : <><Button name={index} id = {index} active = {lastClicked == index} toggle onClick={displayQ}>{index + 1}</Button> <hr></hr></>
}
</>
))}
</Grid.Column>
</Grid>
<center>
         
            <Button type="submit" primary>Submit</Button><br></br><br></br>
            </center> </Form>
      {/* </Container> */}



    </div></center>
  );
}
export default CandidateQuestions;