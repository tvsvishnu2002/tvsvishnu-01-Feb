import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AdminInsTime from "./admin-time";
import AdminInsQ from "./admin-ins-q";
import AdminDelq from "./admin-del-q";
import AdminInsInstr from "./admin-ins-instr";
import AdminHome from "./AdminHome";
import Candidate from "./candidate-name";
import CandidateInstructions from "./candidate-instructions";
import CandidateQuestions from "./candidate-questions";
import CandidateHome from "./CandidateHome";
import { Menu, Icon, Dropdown, Input } from 'semantic-ui-react'
import Leaderboard from "./leaderboard";
import Cookies from "universal-cookie";
import { setAdmin, setLogins } from './reducers/globalStates';
import { logout } from './functions/auth';

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
function NAvbar() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const destroySession = async () => {
        let flag = await logout();
        if (flag === true) {
            dispatcher(setLogins(false, null), setAdmin(false));
            navigate("/objectivetest/authenticate");
        } else {
            return false;
        }
    };
    var cook = new Cookies()
    var uname = cook.get("admin")
    var uname2 = cook.get("username")
    return (
        <div>

            {uname === "true" ? <Menu><Menu.Item as={Link} name='Home' to='/admin'></Menu.Item>
                <Menu.Item as={Link} name='Set Time' to='/admin/instime'></Menu.Item>
                <Menu.Item as={Link} name='Insert Question' to='/admin/insques'></Menu.Item>
                <Menu.Item as={Link} name='Instructions' to='/admin/insinstruction'></Menu.Item>
                <Menu.Item as={Link} name='Assign Test' to='/admin/assigntest'></Menu.Item>
                <Menu.Item as={Link} name='Delete Question' to='/admin/delquestion'></Menu.Item>
                <Menu.Item as={Link} name='Leaderboard' to='/leaderboard'></Menu.Item>

                <Menu.Menu position="right">
                    <Dropdown item trigger={<>
                    <Icon name="user circle" />{uname2} </>} >
                        <Dropdown.Menu>
                         <Dropdown.Item onClick={destroySession}>
                         <Icon name="sign-out" />Logout </Dropdown.Item></Dropdown.Menu></Dropdown> </Menu.Menu>

            </Menu>
                :
                <Menu>
                <Menu.Item as={Link} name='Home' to='/candidate'></Menu.Item>
                <Menu.Item as={Link} name='Leaderboard' to='/leaderboard'></Menu.Item>
                <Menu.Item as={Link} name='Previous Submissions' to='/previous'></Menu.Item>

                <Menu.Menu position="right">
                    <Dropdown item trigger={<>
                    <Icon name="user circle" />{uname2} </>} >
                        <Dropdown.Menu>
                         <Dropdown.Item onClick={destroySession}>
                         <Icon name="sign-out" />Logout </Dropdown.Item></Dropdown.Menu></Dropdown> </Menu.Menu>

            </Menu>
            }



<br></br>
        </div>
    )
}

export default NAvbar;