import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store";

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

  let [num, setNum] = useState('')
  let [text, setText] = useState(true)
  let {id} = useParams();
  let findId = props.cloth.find(function(x){
    return x.id == id
  })
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('')
  let cart = useSelector((state)=>state.cart)
  let dispatch = useDispatch()

  useEffect(()=>{
    setFade2('end')
    return()=>{
      setFade2('')
    }
  },[])

  useEffect(()=> {
   let timer = setTimeout(()=> {
      setText(false)
      console.log(2)
    }, 2000)

    return()=>{
      console.log(1)//클린업 함수가 먼저 작동
      clearTimeout(timer)
    }
  },[])

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])



    return (
      <>
        <div className={"container start "+fade2}>
          {
            text == true ?
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
              <input onChange={(e)=>{setNum(e.target.value)}} />
              <h4 className="pt-5">{findId.title}</h4>
              <p>{findId.content}</p>
              <p>{findId.price}</p>
              <button className="btn btn-primary">주문하기</button>
              <YellowBtn onClick={()=>{
                dispatch(addProduct({id:findId.id, name:findId.title, count:1}))
              }}>장바구니</YellowBtn>
            </div>
            <Box/>
          </div>
          {/* end of row */}
          {/* 탭 */}
          <Nav fill variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=> setTab(0)}>0번</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>setTab(1)}>1번</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>setTab(2)}>2번</Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab={tab} />
          {/* end of 탭 */}
        </div>
        {/* end of container */}
      </>
    );
  }
//Tab 누를때마다 그 탭에 해당하는 내용 출력
function TabContent({tab}){
  // if(tab == 0){
  //  return <div>내용0</div>
  // }else if(tab == 1){
  //   return<div>내용1</div>
  // }else if(tab == 2){
  //   return <div>내용2</div>
  // }//end of if
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{//0.1초 후에 동작. 클린업 함수 동작후에 다시 style에 end를 붙이기 위해
      setFade('end')
    },100)
   
    return()=>{//클린 업 함수로 useEffect 동작하기 전에 먼저 동작함
      setFade('')//end 스타일을 탈부착 하기 위해서
    }
  },[tab])

  return(
  <div className={"start "+fade}>
    {[<div>내용1</div>,<div>내용1</div>,<div>내용2</div>][tab]}
  </div>
  )
}

  export default Detail;