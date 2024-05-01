import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  increase } from "../store";

function Cart(){

    let cart = useSelector((state)=> state.cart)
    let dispatch = useDispatch()
    console.log(cart)
    return(
    <div>
        <Table>
         <thead>
            <tr>
             <th>#</th>
             <th>상품명</th>
             <th>수량</th>
             <th>변경하기</th>
            </tr>
         </thead>
         <tbody>
            {cart.map((a, i)=>{
                return(
                <tr key={i}>
                 <td>{cart[i].id}</td>
                 <td>{cart[i].name}</td>
                 <td>{cart[i].count}</td>
                 <td><button onClick={()=>{
                    dispatch(increase({id:a.id}))
                 }}>+</button></td>
               </tr>
                )
            })
            }{/*end of map */}
         </tbody>
        </Table> 
    </div>
)
}//end of Cart


export default Cart;
