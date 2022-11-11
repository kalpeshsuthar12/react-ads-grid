import React, { useState } from 'react';
import axios from 'axios'
import Grid from './Components/Grid';
import './index.css'

function App() {

  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v1/companys',
      data: {
        query: query
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log(response)
        setData(response.data.data);
      }
    })
      .catch((response) => console.log('error', response));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <form onSubmit={submitHandler} className="w-100">
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={event => setQuery(event.target.value)} placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </div>
        </form>
      </nav>
      <div className="container">
        <div className="grid">
          {
            Array.from(data).map((post, index) => (
              <Grid data={post} key={index}></Grid>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
