import axios from 'axios'
import {Button, Table, Label, Pagination, PaginationProps, Menu, Icon, Dropdown} from 'semantic-ui-react'
import { useState, useEffect } from 'react';
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


  return (
    <div>
      <h1>Leaderboard</h1><hr></hr>
      <Table collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Marks</Table.HeaderCell>
        <Table.HeaderCell>Submitted Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {questions.map((question) => (
<Table.Row>
<Table.Cell>{question.candname}</Table.Cell>
        <Table.Cell>{question.marks} </Table.Cell>
        <Table.Cell>{question.time}</Table.Cell>
          </Table.Row>
          ))}
 </Table.Body>
  </Table>

    </div>
  );
}
export default Leaderboard;