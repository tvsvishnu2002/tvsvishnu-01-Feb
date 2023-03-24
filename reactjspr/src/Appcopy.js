import { BrowserRouter as Router, Link ,Routes,Route } from "react-router-dom";
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import AdminHome from "./AdminHome";
import { useEffect, useState } from "react";
import Candidate from "./candidate-name";
import CandidateInstructions from "./candidate-instructions";
import CandidateQuestions from "./candidate-questions";
import CandidateHome from "./CandidateHome";
import { Menu , Input} from 'semantic-ui-react'
import Leaderboard from "./leaderboard";
import CandidateResult from "./candidate-result";
import AdminEditq from "./admin-editq";
import AdminEditbyid from "./admin-editbyid";
import Auth from "./components/auth";
import Login from "./components/login";
import Practice from "./practice";
import Cookies from "universal-cookie";
import ErrorPage from "./components/error";
import App from "./test";
import Leaderboard2 from "./candidate_wise_result";
import AdminAssignTest from "./admin-assigntest";

function Appc(){
    var cook = new Cookies()
    const [uname, setuname] = useState(cook.get("username"));
    const [adminstatus, setadmin] = useState(cook.get("admin") === "true");
    useEffect(() => {
        setadmin(cook.get("admin"));
        setuname(cook.get("username"))
    }, [])  
    
    return(
        <div>   
        <Router>

                
                <Routes>  {adminstatus === "true" ?
<>
                    <Route path='/admin' element={<AdminHome /> }/>
                    <Route path='/admin/instime' element={<AdminInsTime />} />
                    <Route path='/admin/insques' element={<AdminInsQ />} />
                    <Route path='/admin/insinstruction' element={<AdminInsInstr />} />
                    <Route path='/admin/assigntest' element={<AdminAssignTest />} />
                    <Route path='/admin/delquestion' element={<AdminDelq />} />
                    <Route path='/admin/editquestion' element={<AdminEditq />} />
                    <Route path='/admin/editquestion2/:qidd' element={<AdminEditbyid />} />
                    <Route path='/objectivetest/authenticate' element={<Auth />} />
                    {uname !== "undefined" ?                     
                    <Route path='/' element={<AdminHome /> }/>
:                    <Route path='/' element={<Login /> }/>
}
                    <Route path='/leaderboard' element={<Leaderboard />} />

                    <Route path='/login' element={<Login /> }/>
                    <Route path="*" element={<ErrorPage />} />
                    </>
               :<>                    
               <Route path='/objectivetest/authenticate' element={<Auth />} />

                    <Route path='/candidate' element={<Candidate />} />
                    <Route path='/candidate/instructions2' element={<CandidateInstructions />} />
                    <Route path='/candidate/questions' element={<CandidateQuestions />} />
                    <Route path='/candidate/result2' element={<CandidateResult />} />
                    <Route path='/login' element={<Login /> }/>
                    <Route path='/previous' element={<Leaderboard2 />} />

                    <Route path='/' element={<Candidate /> }/>            
                  <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/practice' element={<Practice />} />
                    <Route path='/test' element={<App />} />
                    <Route path="*" element={<ErrorPage />} />

</>}</Routes>
    
               
        </Router>
        </div>
    )
}

export default Appc;