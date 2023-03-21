import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {Menu, Button} from 'semantic-ui-react'
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import Candidate from './candidate-name';
import Cookies from 'universal-cookie';
function CandidateHome(){
    
    return (
        <div>
            <h1>Admin - Home</h1>
              
            <Routes>
                    <Route path='/candidate' element={<Candidate /> }/>
                    
 
                </Routes>
                <Button primary content='Take Test' as={Link} to='/candidate' required />
                
        </div>
    )

}
export default CandidateHome;