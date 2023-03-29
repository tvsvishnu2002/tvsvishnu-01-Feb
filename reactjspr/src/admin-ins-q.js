import {Input, Menu, TextArea, Button, Modal, Form} from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import NAvbar from './navbar';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
function AdminInsQ() {
  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }

  const [tests, settests] = useState("")
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/testsapi');
      const questions = response.data
      settests(questions)
    }

    fetchData();
  }, []);
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/insq', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }
  return (<center>
    <div className="AdminInsQ">
      <h1>Admin Page - Enter Question</h1>
      <NAvbar /> 

<form onSubmit={handleSub} method="POST">
<table>
<tr>
  <td style={{width:"100px"}}> <b>Test : </b></td><td> 
      {/* <select name="testname" onChange={handleChange} required>
        <option value="" selected disabled hidden>Select</option>
        {tests.map((question) => (
          <option value={question.testname}>{question.testname}</option>
        ))}
        </select>  */}
   </td> </tr> 
   <tr>
    
    
    <td style={{width:"150px"}}> <b>Enter a Question : </b></td><td> <textarea onChange={handleChange} placeholder='Question' name="quest" />
   </td>  </tr> <tr><td style={{width:"100px"}}> <b>Enter Option A : </b></td><td> <Input onChange={handleChange} placeholder='Option A' name="op1" />
   </td> </tr> <tr><td style={{width:"100px"}}> <b>Enter Option B : </b> </td><td><Input onChange={handleChange} placeholder='Option B' name="op2" />
   </td> </tr> <tr><td style={{width:"100px"}}>  <b>Enter Option C : </b></td><td> <Input onChange={handleChange} placeholder='Option C' name="op3" />
   </td> </tr> <tr><td style={{width:"100px"}}>  <b>Enter Option D : </b></td><td> <Input onChange={handleChange} placeholder='Option D' name="op4" />
   </td> </tr> <tr><td style={{width:"100px"}}>  <b>Enter Correct Option : </b> </td><td><Input onChange={handleChange} placeholder='Answer' name="ans" />
   </td> </tr> <tr><td style={{width:"100px"}}>  <b>Marks for Correct : </b></td><td> <Input onChange={handleChange} placeholder='Marks' name="pos" />
   </td> </tr> <tr><td style={{width:"100px"}}>  <b>Negative Marking : </b> </td><td><Input onChange={handleChange} placeholder='Negative Marks' name="neg" />
    </td></tr></table><br></br>
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

export default AdminInsQ;
