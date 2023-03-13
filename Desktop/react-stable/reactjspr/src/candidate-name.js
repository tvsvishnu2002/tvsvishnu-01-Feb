import {Input} from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Candidate() {
  const [formData, setFormdata] = useState({"candname" : ""})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  const history =useNavigate()
  const handleSub = (e) => {
    e.preventDefault();
   axios.post('/update', formData);
   history('/candidate/instructions2')
    

  }
  return (
    <div className="Candidate">
      <h1>Candidate - Enter Name</h1><hr></hr>
      <form onSubmit={handleSub} method="post"> 
      <b>Enter Name : </b><Input onChange= {handleChange} placeholder='Enter Name' name="candname" />
          <br></br><br></br>
          <button class="ui primary button">Submit</button>
      </form>
    </div>
  );
}
export default Candidate;