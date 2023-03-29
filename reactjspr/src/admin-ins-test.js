import {Input, Menu, TextArea, Button, Modal, Form} from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import NAvbar from './navbar';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function AdminInsTest() {
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/instest', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
  return (<center>
    <div className="AdminInsQ">
      <h1>Admin Page - Enter Question</h1>
      <NAvbar /> 

<form onSubmit={handleSub} method="POST">
<Input type="text" name="testname" onChange={handleChange}></Input> 
<button class="ui primary button">Submit</button></form>
{open ? 

<Modal
      centered={true}
      open={true}
      onClose={() => setOpen(false)}
      
    >
      <Modal.Header>Objective Test Software</Modal.Header>
      <Modal.Content>
        <Modal.Description style={{color:"Black"}}>
          Question Added Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}

    </div></center>
  );
}

export default AdminInsTest;
