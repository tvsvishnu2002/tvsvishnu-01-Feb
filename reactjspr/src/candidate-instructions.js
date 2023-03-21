import axios from 'axios'
import {Button, List, Form, Checkbox, Item, Dropdown} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import NAvbar from './navbar';
function CandidateInstructions(props) {
  const nav = useNavigate()
  const [instructions, setInstructions] = useState([]);
  function handleSub(e){
    nav("/candidate/questions")
  }
  var cookie = new Cookies()
  const [uname, setuname] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/instructionsapi');
      const instructions = response.data

      setInstructions(instructions);

      setuname(cookie.get("username"))

    }

    fetchData();
  }, []);
  
  return (<center>
    <div>
      <h1>Candidate Page - Instructions</h1><hr></hr>
<NAvbar></NAvbar><br></br>
      <h2>Welcome, {uname} </h2>
      <form  onSubmit={handleSub}>
      <List bulleted>
    

        {instructions.map((instruction) => (
      <List.Item verticalAlign='top'>{instruction.instruction}<br></br></List.Item> 
     ))}
  </List>

<br></br>
<br></br>
<div class="ui checkbox">
  <input type="checkbox" required/>
  <label>Check this after reading all the instructions</label>
</div><br></br><br></br>
        <Button content='Start Test' primary />
        </form>
    </div></center>
  );

}

export default CandidateInstructions;
