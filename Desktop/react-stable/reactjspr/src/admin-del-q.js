import axios from 'axios'
import {Button, Menu, Dropdown} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import {navbar} from './navbar'
import { Link } from 'react-router-dom';
function AdminDelq(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/candidate/questionsapi');
      const questions = response.data["questions"]

      setQuestions(questions);


    }

    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Admin Page - Delete Question</h1><navbar />
      <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

                </Menu>
      <form action="/admin/deleteq" method="POST">
      <b>Select question to Delete : </b> 
      
      <select name="delquest" required>
        <option value="" selected disabled hidden>Select</option>
        {questions.map((question) => (
          <option value={question._id}>{question.ques}</option>
        ))}
        </select>
<br></br>
<br></br>
        <Button content='Submit' primary />
        </form>
    </div>
  );

}

export default AdminDelq;
