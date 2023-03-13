import {Input, Menu} from 'semantic-ui-react'
import {navbar} from './navbar';
import { Link } from 'react-router-dom';
function AdminInsInstr() {
    return (
      <div className="AdminInsInstr">
        <h1>Admin Page - Enter Instruction</h1>
        <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

                </Menu>
        <navbar />
   <form action="/admin/insinstr" method="POST">

   <b>Enter Instruction : </b><Input placeholder='Enter Instruction' name="instruction" />
          <br></br><br></br>
          <button class="ui primary button">Submit</button>
    </form>
      </div>
    );
  }
  export default AdminInsInstr;  