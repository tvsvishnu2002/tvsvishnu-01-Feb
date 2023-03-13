import {Input, Menu, TextArea, Form} from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import {navbar} from './navbar';
function AdminInsQ() {
  return (
    <div className="AdminInsQ">
      <h1>Admin Page - Enter Question</h1>
      <navbar />
      <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

                </Menu>

<form action="/admin/insq" method="POST">

    <b>Enter a Question : </b> <textarea placeholder='Question' name="quest" /><br></br><br></br>
    <b>Enter Option A : </b> <Input placeholder='Option A' name="op1" /><br></br><br></br>
    <b>Enter Option B : </b> <Input placeholder='Option B' name="op2" /><br></br><br></br>
    <b>Enter Option C : </b> <Input placeholder='Option C' name="op3" /><br></br><br></br>
    <b>Enter Option D : </b> <Input placeholder='Option D' name="op4" /><br></br><br></br>
    <b>Enter Correct Option : </b> <Input placeholder='Answer' name="ans" /><br></br><br></br>
    <b>Marks for Correct : </b> <Input placeholder='Marks' name="pos" /><br></br><br></br>
    <b>Negative Marking : </b> <Input placeholder='Negative Marks' name="neg" /><br></br><br></br>
    
<button class="ui primary button">Submit</button></form>
    </div>
  );
}

export default AdminInsQ;
