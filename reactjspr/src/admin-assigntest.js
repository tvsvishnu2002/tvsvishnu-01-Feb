import {Input, Menu} from 'semantic-ui-react'
import NAvbar from './navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import {Modal, Button , Table} from 'semantic-ui-react';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';
function AdminAssignTest() {
  var cookie = new Cookies()
  const [open, setOpen] = React.useState(false)
  const [uname, setuname] = useState("")
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  const [assignedusers, setassignedusers] = useState([])

  const handleDel = (e) => {
    var qid = e;
    axios.post('/admin/deleteuserassignment', { delquest: qid }).then((data) => {
      console.log("Hi")
      console.log("deleted")
      
      async function fetchData() {
        const response = await axios.get('/candidate/assignedusersapi');
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
    axios.post('/admin/assigntest', formData).then((response) => {
      setOpen(true);
      async function fetchData() {
        const response = await axios.get('/candidate/assignedusersapi');
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
      const response = await axios.get('/candidate/assignedusersapi');
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
      <div className="AdminAssignTest">
        <h1>Admin Page - Enter Username to assign test</h1>
        <NAvbar /> 

   <form onSubmit={handleSub} method="POST">

   <b>Enter Username : </b><Input onChange={handleChange} placeholder='Enter Username' name="instruction" />
          <br></br><br></br>
          <button class="ui primary button">Submit</button>
    </form>

    <Table collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Remove Access</Table.HeaderCell>
      </Table.Row>
    </Table.Header>      
    <Table.Body>

    {assignedusers.map((instruction) => (
      <Table.Row>
        <Table.Cell>{instruction.username}</Table.Cell>
        <Table.Cell><Button name={instruction._id} icon='delete' onClick={() => handleDel(instruction._id)} negative /></Table.Cell>
        </Table.Row>
             ))}
             </Table.Body>
</Table>
    {open ? 

<Modal
      centered={true}
      open={true}
      onClose={() => setOpen(false)}
      
    >
      <Modal.Header>Objective Test Software</Modal.Header>
      <Modal.Content>
        <Modal.Description style={{color:"Black"}}>
          Test Assigned Successfully.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal> : <></>}
  </div></center>
    );
  }
  export default AdminAssignTest;  