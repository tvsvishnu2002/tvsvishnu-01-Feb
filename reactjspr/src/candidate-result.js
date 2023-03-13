import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {List,Button, Grid, Image, Form, Radio, Container} from 'semantic-ui-react'
import { useFullScreenHandle } from 'react-full-screen';
function CandidateResult(props){
    console.log(props)
    const {totalmarks} = useLocation()
    console.log(totalmarks)
return (
        <div>
            <h1>Candidate</h1><hr></hr>
            <h2>            Test Submitted Succesfully</h2>
            
<h3>{totalmarks}</h3>
           </div>
    );
}
export default CandidateResult;