import { BrowserRouter as Router, Link ,Routes,Route } from "react-router-dom";
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import AdminHome from "./AdminHome";
import Candidate from "./candidate-name";
import CandidateInstructions from "./candidate-instructions";
import CandidateQuestions from "./candidate-questions";
import CandidateHome from "./CandidateHome";
import { Menu , Input} from 'semantic-ui-react'
import Leaderboard from "./leaderboard";

function navbar(){
    return(
        <div>
        <Router>
                 <Menu>
                    <Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Time' to='/admin/instime'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                    <Menu.Item as={Link} name='Insert Instruction' to='/admin/insinstruction'></Menu.Item>
                    <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                    <Menu.Item as={Link} name='Take Test' to='/candidate'></Menu.Item>

                </Menu>
                 
                <Routes>
                    <Route path='/admin' element={<AdminHome /> }/>
                    <Route path='/admin/instime' element={<AdminInsTime />} />
                    <Route path='/admin/insques' element={<AdminInsQ />} />
                    <Route path='/admin/insinstruction' element={<AdminInsInstr />} />
                    <Route path='/admin/delquestion' element={<AdminDelq />} />
                    <Route path='/candidate' element={<Candidate />} />
                    <Route path='/candidate/instructions2' element={<CandidateInstructions />} />
                    <Route path='/candidate/questions' element={<CandidateQuestions />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />

 
                </Routes>
                
        </Router>
        </div>
    )
}

export default navbar;