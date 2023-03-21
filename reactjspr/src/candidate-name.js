import {Input} from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import {Button, Icon} from 'semantic-ui-react'
import Navbar from './components/navbar';
import NAvbar from './navbar';
function Candidate() {

  const [formData, setFormdata] = useState({"candname" : ""})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  var cook = new Cookies()
  var uname = cook.get("username")
  var sessid = cook.get("session_id")
  const history =useNavigate()

  if(uname === undefined){
    alert("Hi")
    history('/login')
  }
  
  
  const handleSub = (e) => {
    e.preventDefault();
   axios.post('/update', formData);
   history('/candidate/instructions2')
    

  }
  
  return (<center>
    <div className="Candidate"> {sessid}
      <h1>Candidate - Enter Name</h1>
      <NAvbar/><br></br>
      <form onSubmit={handleSub} method="post"> 
      <b>Check Name : </b><Input placeholder='Enter Name' defaultValue = {uname} disabled name="candname" />
          <br></br><br></br>
          <Button animated primary>
      <Button.Content visible >Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
      </form>
    </div></center>
  );
}
export default Candidate;