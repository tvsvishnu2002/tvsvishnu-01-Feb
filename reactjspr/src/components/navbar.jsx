import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { logout } from '../functions/auth';
import { setAdmin, setLogins } from '../reducers/globalStates';

export default function Navbar() {
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("home")
    const destroySession = async () => {
        let flag = await logout();
        if (flag === true) {
            dispatcher(setLogins(false, null), setAdmin(false));
            navigate("/objectivetest/authenticate");
        } else {
            return false;
        }
    };
    const State = useSelector((state) => state.globalStates);

    const handleItemClick = (e, { name }) => setActiveItem(name)
    return (
        <div>
            <Menu>
                {State.loggedIn ? (<>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        as={Link}
                        to="/"
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Admin'
                        as={Link}
                        to="admin"
                        active={activeItem === 'Admin'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Logout'
                        position="right"
                        onClick={destroySession}
                    />
                </>) : <>
                    <Menu.Item
                        name='Admin'
                        active={activeItem === 'Admin'}
                        as={Link}
                        to="/admin"
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Insert Time'
                        active={activeItem === 'Insert Time'}
                        as={Link}
                        to="/admin/instime"
                        onClick={handleItemClick}
                    />
                    
                </>}
            </Menu>
        </div>
    )
}
