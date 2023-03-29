import {Input} from 'semantic-ui-react'
import axios from 'axios';
import moment from 'moment/moment';
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

  const [allowexp, setallowexp] = useState(false)
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
  var date = Date.now();
  
  useEffect(() => {
    async function fetchData() {


      const response = await axios.get('/candidate/exptimeapi').then((response) => {
        const assigneduserss = response.data[0].time
        var exptime = assigneduserss
        var currtime = moment(date).format("YYYY-MM-DDTHH:mm")
        console.log(exptime)
        console.log(currtime)
        var exptime2 = Date(exptime)
        console.log(currtime - exptime2)
        if(currtime < exptime){
          console.log("Expired")
          setallowexp(true)
        }
      }
        



      );
      
      
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
  const [tests, settests] = useState("")
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/testsapi');
      const questions = response.data
      settests(questions)
    }

    fetchData();
  }, []);
  return (<center>
    <div className="Candidate"> 
    <h1>Candidate - Enter Name</h1><NAvbar/>
      <br></br>
      <form onSubmit={handleSub} method="post"> 
      <b>Check Username : </b><Input placeholder='Enter Name' defaultValue = {uname} disabled name="candname" />
          <br></br><br></br>
          {/* <b>Test : </b> <select name="testname" onChange={handleChange} required>
        <option value="" selected disabled hidden>Select</option>
        {tests.map((question) => (
          <option value={question.testname}>{question.testname}</option>
        ))}
        </select>
          <br></br><br></br> */}
            {allow ? 
            
            allowexp ? 
            
            <Button animated primary><Button.Content visible >Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button> : <h1>Test Expired</h1> : <h1>User not assigned to take test</h1>}
      
      </form>
    </div></center>
  );
}
export default Candidate;