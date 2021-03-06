import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding : 20px;
`;


function Detail(props) {
    let [ alert, alert변경함수 ] = useState(true);
    useEffect(()=>{
        let 타이머 = setTimeout(()=>{ alert변경함수(false)},2000);
        return ()=>{ clearTimeout(타이머) }
    }, []);

    let { id } = useParams();
    let 찾은상품 = props.Data.find(function(상품){
        return 상품.id == id
    });

    let 제목 = styled.h4`
        font-size : 25px;
        color : ${ props => props.색상 }
    `;

    let history = useHistory(); //뒤로가기 버튼 만들기

    return (
      <div className="container">
          <박스>
            <제목 className="red">DETAIL</제목>
          </박스>
          
          {
              alert === true
              ? (<div className="my-alert-yellow">
                <p>재고가 얼마 남지 않았습니다!!</p>
                </div>)
            : null
          }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ 찾은상품.title }</h4>
          <p>{ 찾은상품.content }</p>
          <p>{ 찾은상품.price }</p>
          <Info 재고={props.재고}></Info>

          

          <button className="btn btn-danger" onClick={ ()=>{ props.재고변경([9,10,11]) } }>주문하기</button> 
          <button className="btn btn-danger" onClick={ ()=>{ history.goBack();} }>뒤로가기</button> 
        </div>
      </div>
  </div> 
    )
  }

  function Info(props) {
      return (
          <p> 재고 : {props.재고[0]} </p>
      )
  }

export default Detail;