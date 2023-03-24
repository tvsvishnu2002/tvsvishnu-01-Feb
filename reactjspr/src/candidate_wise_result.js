import axios from 'axios'
import {Button, Table,  Label, Pagination, PaginationProps, Menu, Icon, Dropdown, PaginationItem} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import NAvbar from './navbar';
import "./style.css"
import Cookies from 'universal-cookie';
import ReactPaginate from 'react-paginate';
function Leaderboard2() {
  const [questions, setQuestions] = useState([]);
  var cook = new Cookies()

  const [uname, setuname] = useState(cook.get("username"));
  
  useEffect(() => {
    async function fetchData() {

      const response = await axios.post('/leaderboardapi2', {username : uname});
      const questions = response.data
      setQuestions(questions);
      
    }
    fetchData();
  }, [questions]);
  const [currentPage, setCurrentPage] = useState(0); 
  const handlePageClick = (data) => { 
    setCurrentPage(data.selected);
   }; 
   const articlesPerPage = 10; 
   const startIndex = currentPage * articlesPerPage; 
   const endIndex = startIndex + articlesPerPage; 
   const currentArticles = questions.slice(startIndex, endIndex); 
   const pageCount = Math.ceil(questions.length / articlesPerPage);
   const [pageNumber, setPageNumber] = useState(0);
   const itemsPerPage = 10; // Define the number of items per page

   const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };


  const data = questions.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);





  return (
    <center>    <div>
      <h1>Previous Submissions</h1>
      <NAvbar></NAvbar>
      <Table collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Marks</Table.HeaderCell>
        <Table.HeaderCell>Submitted Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {currentArticles.map((question) => (
<Table.Row>
<Table.Cell>{question.candname}</Table.Cell>
        <Table.Cell>{question.marks} </Table.Cell>
        <Table.Cell>{question.time}</Table.Cell>
          </Table.Row>
          ))}
 </Table.Body>
  </Table>

<div className="pagination-wrapper">
 <ReactPaginate 
  previousLabel={'Previous'} 
  nextLabel={'Next'} 
  pageCount={Math.ceil(questions.length / articlesPerPage)} 
  onPageChange={handlePageClick} 
  containerClassName={'pagination'} 
  activeClassName={'active'} 
  pageRangeDisplayed={2} 
  marginPagesDisplayed={2} 
  breakClassName={'break-me'} 
  breakLinkClassName={'break-me-link'} /> 
  </div>
    
    
    </div>
    </center>

  );
}
export default Leaderboard2;