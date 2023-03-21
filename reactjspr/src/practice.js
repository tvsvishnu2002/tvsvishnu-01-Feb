import {Menu, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AdminHome from './AdminHome';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';

function Practice() {

    const [tab1, settab1] = useState([1,2,3])
    const [tab2, settab2] = useState([4,5,6])
    
    const handleClic = (e) => {
        var index = e.target.name;
        tab2.push(e.target.value)
        var temp = tab1
        temp.splice(index - 1, 1)

        settab1(temp)
        settab2(tab2)
        
    }

    return (
    <div className="AdminInsTime">
      
      <h1>Admin Page - Enter Time</h1>
      <h2>PART 1</h2>
<Button onClick={handleClic} name="1" value = "7"> + </Button>
{tab1.map((item, index) => {
<Button value={index} name = {item} >+</Button>
}
)
}
      <h3>PART 1</h3>

      {tab2}
    </div>
  );
}
export default Practice;