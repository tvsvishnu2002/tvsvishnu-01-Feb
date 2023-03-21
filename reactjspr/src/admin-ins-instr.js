import {Input, Menu} from 'semantic-ui-react'
import NAvbar from './navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import {Modal, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useState } from 'react';
function AdminInsInstr() {
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/insinstr', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
    return (
      <div className="AdminInsInstr">
        <h1>Admin Page - Enter Instruction</h1>
        <NAvbar /> 

   <form onSubmit={handleSub} method="POST">

   <b>Enter Instruction : </b><Input onChange={handleChange} placeholder='Enter Instruction' name="instruction" />
          <br></br><br></br>
          <button class="ui primary button">Submit</button>
    </form>

    {open ? 

<Modal
      centered={true}
      open={true}
      onClose={() => setOpen(false)}
      
    >
      <Modal.Header>Objective Test Software</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Instruction Added Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}


      </div>
    );
  }
  export default AdminInsInstr;  