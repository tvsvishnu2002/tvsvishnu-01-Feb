import {Menu, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AdminHome from './AdminHome';
function AdminInsTime() {
  return (
    <div className="AdminInsTime">
      
      <h1>Admin Page - Enter Time</h1>
      <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Edit Question' to='/admin/editquestion'></Menu.Item>

                </Menu>
     <navbar />
      <form action="/admin/instime" method="post">
      <b>Enter Time in Minutes : </b><Input label={{ basic: true, content: 'minutes' }}
    labelPosition='right'
    placeholder='Enter Time in Minutes' name="time" />
          <br></br><br></br>
          <button class="ui primary button">Submit</button>
      </form>
    </div>
  );
}
export default AdminInsTime;