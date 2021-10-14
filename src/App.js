import React, { useState } from 'react';
import './App.css';
import Data from "./data";
import Detail from './Detail.js';
import Navbarjs from './Navbar.js';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';



function App() {

  let [data, data변경함수] = useState(Data);
  let [재고, 재고변경함수] = useState([10,11,12]);

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
          data.map((a,i)=>{
            return <Card data={data[i]} i={i} />
          })
        }
        {/* Data 개수만큼 map을 돌려주세요 */}
      </div>
    </div>
    <button className="btn btn-primary" onClick={()=>{ 

      axios.post('서버URL', { id:'hyunah', pw: 1234 });
      // 서버에 데이터를 보내고 싶을 때 POST 요청하는 법

      // 성공하면 .then() 실패하면 .catch()
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{ 
      
        console.log(result.data);
        data변경함수( [...data, ...result.data] ); // data 카피본 만들기
       })
      .catch(()=>{ 
        console.log('ajax 요청 실패')
       })
     }}>더보기</button>
    </Route>
    
    <Route path="/detail/:id">
        <Detail Data={Data} 재고={재고} 재고변경함수={재고변경함수}/>
    </Route>

  </Switch>

    </div>
  );
}



function Card(props) {
  return (
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i +1) + '.jpg' } width="100%"  />
      <h4>{ props.data.title }</h4>
      <p>{ props.data.content }</p>
      </div>
      // Data라는 state는 부모컴포넌트가 가지고 있기 때문에 props 사용
  )
}

export default App;
