import axios from 'axios'
import React from 'react';
import {Button,Modal,  Menu, Dropdown} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import NAvbar from './navbar';
import { Link } from 'react-router-dom';

function AdminDelq(props) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]
      setQuestions(questions);
    }
    fetchData();
  }, []);
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/deleteq', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
  return (<center>
    <div>
      <h1>Admin Page - Delete Question</h1><navbar />
      <NAvbar /> 

      <form onSubmit={handleSub} method="POST">
      <b>Select question to Delete : </b> 
      
      <select name="delquest" onChange={handleChange} required>
        <option value="" selected disabled hidden>Select</option>
        {questions.map((question) => (
          <option value={question._id}>{question.ques}</option>
        ))}
        </select>
<br></br>
<br></br>
        <Button content='Submit' primary />
        </form>
        {open ? 

<Modal
      centered={true}
      open={true}
      onClose={() => setOpen(false)}
      
    >
      <Modal.Header>Objective Test Software</Modal.Header>
      <Modal.Content>
        <Modal.Description style={{color:"Black"}}>
          Question Deleted Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}
    </div></center>
  );

}

export default AdminDelq;
