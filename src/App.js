import React, { useState } from 'react';
import './App.css';
import Data from "./data";
import Detail from './Detail.js';
import Navbarjs from './Navbar.js';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';

import { Link, Route, Switch } from 'react-router-dom';



function App() {

  let [data, data변경함수] = useState([Data]);

  return (
  <div className="App">
    <Navbarjs />
    
  <Switch>
  
  <Route exact path="/">
    <div className="intro">
      <div className="intro_text">
      <h1>20% season offf</h1>
      <p>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
      </p>
      <p>
      <Button variant="primary">Learn more</Button>
      </p>
      </div>
    </div>

    <div className="container">
    <div className="row">
      {
        Data.map((a,i)=>{
          return <Card Data={Data[i]} i={i} />
        })
      }
      {/* Data 개수만큼 map을 돌려주세요 */}
    </div>
  </div>
    </Route>
    
    <Route path="/detail/:id">
        <Detail Data={Data}/>
    </Route>

  </Switch>

    </div>
  );
}



function Card(props) {
  return (
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i +1) + '.jpg' } width="100%"  />
      <h4>{ props.Data.title }</h4>
      <p>{ props.Data.content }</p>
      </div>
      // Data라는 state는 부모컴포넌트가 가지고 있기 때문에 props 사용
  )
}

export default App;
