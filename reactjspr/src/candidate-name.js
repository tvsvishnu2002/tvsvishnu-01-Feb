import {Input} from 'semantic-ui-react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import {Button, Icon} from 'semantic-ui-react'
import Navbar from './components/navbar';
import NAvbar from './navbar';
function Candidate() {

  var cookie = new Cookies()
  const [uname, setuname] = useState("")
  const [assignedusers, setassignedusers] = useState([])
  const [allow, setallow] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/assignedusersapi');
      const assigneduserss = response.data
      var unam = cookie.get("username")

      console.log(assignedusers)
      for(var i = 0; i<assigneduserss.length; i++ ){
        if(assigneduserss[i].username === unam){
          setallow(true)
        }
      }
    
      setassignedusers(assigneduserss);
      setuname(cookie.get("username"))
      
    }

    fetchData();
  }, []);
  const [formData, setFormdata] = useState({"candname" : ""})
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value});
  }
  var cook = new Cookies()
  var sessid = cook.get("session_id")
  const history =useNavigate()

  if(uname === undefined){
    history('/login')
  }
  
  
  const handleSub = (e) => {
    e.preventDefault();
   axios.post('/update', formData);
   history('/candidate/instructions2')
    

  }
  
  return (<center>
    <div className="Candidate"> 
      <h1>Candidate - Enter Name</h1>
      <NAvbar/><br></br>
      <form onSubmit={handleSub} method="post"> 
      <b>Check Username : </b><Input placeholder='Enter Name' defaultValue = {uname} disabled name="candname" />
          <br></br><br></br>
          

            {allow ? <Button animated primary><Button.Content visible >Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button> : <h1>User not assigned to take test</h1>}
      
      </form>
    </div></center>
  );
}
export default Candidate;