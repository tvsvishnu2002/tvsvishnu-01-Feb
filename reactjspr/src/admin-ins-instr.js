import {Input,Table, Menu} from 'semantic-ui-react'
import NAvbar from './navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import {Modal, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';
function AdminInsInstr() {
  var cookie = new Cookies()
  const [uname, setuname] = useState("")
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  const [assignedusers, setassignedusers] = useState([])

  const handleDel = (e) => {
    var qid = e;
    axios.post('/admin/deleteinstruction', { delquest: qid }).then((data) => {
      console.log("Hi")
      console.log("deleted")
      
      async function fetchData() {
        const response = await axios.get('/candidate/instructionsapi');
        const assigneduserss = response.data
        var unam = cookie.get("username")
  
        console.log(assignedusers)
        
      
        setassignedusers(assigneduserss);
        console.log(assignedusers)
  
        setuname(cookie.get("username"))
        
      }
      fetchData();
    })

  }
  




  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/insinstr', formData).then((response) => {
      setOpen(true);
      async function fetchData() {
        const response = await axios.get('/candidate/instructionsapi');
        const assigneduserss = response.data
        var unam = cookie.get("username")
  
        console.log(assignedusers)
        
      
        setassignedusers(assigneduserss);
        console.log(assignedusers)
  
        setuname(cookie.get("username"))
        
      }
      fetchData();
    })

  }

  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/instructionsapi');
      const assigneduserss = response.data
      var unam = cookie.get("username")

      console.log(assignedusers)
      
    
      setassignedusers(assigneduserss);
      console.log(assignedusers)

      setuname(cookie.get("username"))
      
    }

    fetchData();
  }, []);

    return (<center>
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
        <Modal.Description style={{color:"Black"}}>
          Instruction Added Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}


    <Table collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Instruction</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>      <Table.Body>

    {assignedusers.map((instruction) => (
      <Table.Row>
        <Table.Cell>{instruction.instruction}</Table.Cell>
        <Table.Cell><Button name={instruction._id} icon='delete' onClick={() => handleDel(instruction._id)} negative /></Table.Cell>
        </Table.Row>
        
             ))}

             </Table.Body>

</Table>
      </div></center>
    );
  }
  export default AdminInsInstr;  