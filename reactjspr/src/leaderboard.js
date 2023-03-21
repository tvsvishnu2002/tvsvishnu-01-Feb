import axios from 'axios'
import {Button, Table, Label, Pagination, PaginationProps, Menu, Icon, Dropdown} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import NAvbar from './navbar';
import ReactPaginate from 'react-paginate';
import "./pag.css";
function Leaderboard() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/leaderboardapi');
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



  return (
    <center>    <div>
      <h1>Leaderboard</h1>
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
  previousLabel={'<<'} 
  nextLabel={'>>'} 
  pageCount={Math.ceil(questions.length / articlesPerPage)} 
  onPageChange={handlePageClick} 
  containerClassName={'pagination'} 
  activeClassName={'active'} 
  pageRangeDisplayed={2} 
  marginPagesDisplayed={2} 
  breakClassName={'break-me'} 
  breakLinkClassName={'break-me-link'} /></div>
    </div></center>

  );
}
export default Leaderboard;