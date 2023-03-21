import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import axios from 'axios';

const App = () => {

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
  params: {pnrNumber: 4345103983},
  headers: {
    'X-RapidAPI-Key': 'bb605a4a7emsh8dd1cb01d9f37d4p12280ajsn9207b7656ae4',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  alert("Received")
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (<div className="App">
  </div>);
};

export default App;