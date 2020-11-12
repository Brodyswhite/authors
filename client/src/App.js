import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Link} from "@reach/router";
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">


      {/* <div className="d-flex justify-content-around mx-auto"> */}
        <h1 className="bg-dark text-warning rounded col-3 mx-auto">Authors</h1>
        <div className="d-felx justify-content-around mx-auto col-3 p-2 bg-dark">
          <Link to="/new" className="btn btn-primary">Create Author</Link>
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
        <Router>
          <Main path="/" />
          <New path="/new" />
          <Show path="/author/:id" />
          <Edit path="/edit/:id" />
        </Router>

      </div>
    // </div>
  );
}

export default App;
