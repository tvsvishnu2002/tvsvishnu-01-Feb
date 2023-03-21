import {Input, Menu, TextArea, Button, Modal, Form} from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import NAvbar from './navbar';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function AdminInsQ() {
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/insq', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
  return (
    <div className="AdminInsQ">
      <h1>Admin Page - Enter Question</h1>
      <NAvbar /> 

<form onSubmit={handleSub} method="POST">

    <b>Enter a Question : </b> <textarea onChange={handleChange} placeholder='Question' name="quest" /><br></br><br></br>
    <b>Enter Option A : </b> <Input onChange={handleChange} placeholder='Option A' name="op1" /><br></br><br></br>
    <b>Enter Option B : </b> <Input onChange={handleChange} placeholder='Option B' name="op2" /><br></br><br></br>
    <b>Enter Option C : </b> <Input onChange={handleChange} placeholder='Option C' name="op3" /><br></br><br></br>
    <b>Enter Option D : </b> <Input onChange={handleChange} placeholder='Option D' name="op4" /><br></br><br></br>
    <b>Enter Correct Option : </b> <Input onChange={handleChange} placeholder='Answer' name="ans" /><br></br><br></br>
    <b>Marks for Correct : </b> <Input onChange={handleChange} placeholder='Marks' name="pos" /><br></br><br></br>
    <b>Negative Marking : </b> <Input onChange={handleChange} placeholder='Negative Marks' name="neg" /><br></br><br></br>
    
<button class="ui primary button">Submit</button></form>
{open ? 

<Modal
      centered={true}
      open={true}
      onClose={() => setOpen(false)}
      
    >
      <Modal.Header>Objective Test Software</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Question Added Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}

    </div>
  );
}

export default AdminInsQ;
