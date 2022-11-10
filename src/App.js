import React, { useEffect, useState } from 'react';
import Grid from './Components/Grid';
import './index.css'

function App() {

  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    const url = "http://localhost:8000/api/v1/companys";
    const response = await fetch(url);
    const json = await response.json();
    const results = json.data
    setData(results);
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={event => setQuery(event.target.value)} placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="grid">
          {
            Array.from(data).filter(post => {    
              if (query === '') {
                return post;
              } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
              else if (post.company_info.description.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
              else if (post.company_info.headline.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
              else if (post.company_info.primaryText.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
              return null;
            }).map((post, index) => (
              <Grid data={post} key={index}></Grid>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
