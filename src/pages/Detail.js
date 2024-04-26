import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
background : yellow;
color : black;
padding : 7px;
border-radius : 5px;
border : 1px solid gray;
margin-left : 5px;
`
let Box =  styled.div`
  background : grey;
  padding : 20px;
`


function Detail(props) {

  useEffect(()=> {
   let timer = setTimeout(()=> {
      setAlert(false)
      console.log(2)
    }, 2000)

    return()=>{
      console.log(1)//클린업 함수가 먼저 작동
      clearTimeout(timer)
    }
  },[])

  let [alert, setAlert] = useState(true)
  let {id} = useParams();
  let findId = props.cloth.find(function(x){
    return x.id == id
  })

    return (
      <>
        <div className="container">
          {
            alert == true ?
            <div className="alert alert-warning">
            2초이내 구매시 할인
            </div>
             :null 
        }
          
          <div className="row">
            <Box/>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/img/ct"+(findId.id+1)+".png"}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{findId.title}</h4>
              <p>{findId.content}</p>
              <p>{findId.price}</p>
              <button className="btn btn-primary">주문하기</button>
              <YellowBtn>장바구니</YellowBtn>
            </div>
            <Box/>
          </div>
        </div>
      </>
    );
  }
  export default Detail;