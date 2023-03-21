import axios from 'axios'
import { Button, Menu, Grid, Segment ,Modal, Dropdown, Input, Checkbox } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NAvbar from './navbar';
import React from 'react';
function AdminEditbyid(props) {
  var qidd = useParams()

  var qidmain = qidd.qidd
  console.log(qidmain)
  const [qidddd, setQID] = useState(false);

  const [questions, setQuestions] = useState(false);
  const [formData, setFormdata] = useState({})

  function fetchData() {
    axios.get('/candidate/questionsapi').then(
      response => {
        console.log("inn");
        setQID(qidmain)
        setQuestions(response.data["questions"]);
        setFormdata({...formData, ["currqid"] : questions[qidddd]._id});
      }).then(
        ()=>{
          console.log(questions);
        }
      )

  }
  useEffect(fetchData, [])

  useEffect(()=>{},[questions])

  const [open, setOpen] = React.useState(false)
  const [sub, setsub] = useState(false)
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  function handleSub(e) {
    e.preventDefault()
    
    console.log(formData)
    axios.post('/admin/editq', formData).then((response) => {
      setsub(true);
      setOpen(true);

    })
  }


  return (
    <div>
      <h1>Admin Page - Edit Question</h1>
      <NAvbar /> 

      {questions ?<> <form onSubmit={handleSub} method="POST">

        <br></br><br></br>
        <input hidden readOnly name="currqid" value= {questions[qidddd]._id}/>
        <b>Question : </b> <Input placeholder='Question' onChange={handleChange} name="quest" defaultValue={questions[qidddd].ques} /><br></br><br></br>
        <b>Option A : </b> <Input placeholder='Option A' onChange={handleChange} name="op1" defaultValue={questions[qidddd].op1} /><br></br><br></br>
        <b>Option B : </b> <Input placeholder='Option B' onChange={handleChange} name="op2" defaultValue={questions[qidddd].op2} /><br></br><br></br>
        <b>Option C : </b> <Input placeholder='Option C' onChange={handleChange} name="op3" defaultValue={questions[qidddd].op3} /><br></br><br></br>
        <b>Option D : </b> <Input placeholder='Option D' onChange={handleChange} name="op4" defaultValue={questions[qidddd].op4} /><br></br><br></br>
        <b>Correct Option : </b> <Input placeholder='Answer' onChange={handleChange} name="ans" defaultValue={questions[qidddd].ans} /><br></br><br></br>
        <b>Marks for Correct : </b> <Input placeholder='Marks' onChange={handleChange} name="pos" defaultValue={questions[qidddd].marks} /><br></br><br></br>
        <b>Negative Marking : </b> <Input placeholder='Negative Marks' onChange={handleChange} name="neg" defaultValue={questions[qidddd].neg} /><br></br><br></br>
        <input type="checkbox" class="ui checkbox" onChange={handleChange} name='deleteqq'></input>
        <label>Check this for deleting the question</label>


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
                <Modal.Description>
                  Question Edited Successfully.
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary onClick={() => setOpen(false)}>OK</Button>
              </Modal.Actions>
            </Modal> : <></>}
            </>
      
      : <h1>Loading ... </h1>}
    </div>
  );

}

export default AdminEditbyid;
