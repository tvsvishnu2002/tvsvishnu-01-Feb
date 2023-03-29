import {Menu, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AdminHome from './AdminHome';
import NAvbar from './navbar';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Modal, Button }from 'semantic-ui-react';
function AdminInsExp() {
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/insexp', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
  return (<center>    
    <div className="AdminInsExp">
      
      <h1>Admin Page - Enter Time</h1>
      
     <NAvbar />
      <form onSubmit={handleSub} method="post">
      <b>Enter Time in Minutes : </b><Input onChange={handleChange} placeholder='Enter Time in Minutes' type="datetime-local" name="time" />
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
        <Modal.Description style={{color:"Black"}}>
          Timer Set Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}

    </div></center>

  );
}
export default AdminInsExp;