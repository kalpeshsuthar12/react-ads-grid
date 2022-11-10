import React,{useState} from 'react';

function Header() {

  const [query, setQuery] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={event => setQuery(event.target.value)} placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;