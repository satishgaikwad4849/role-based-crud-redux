import React,{ useState,useContext, useEffect,useRef } from 'react'
import { Button } from "react-bootstrap";
import MyContext from './context'
import { Container, Form } from "react-bootstrap";

export const ProductItem = (props) => {
  let [num, setNum]= useState(0);
  const [total,setTotal]=useState(0)
  const [subTotal,setSubTotal]=useState([])
  const [checkQty,setCheckQty]=useState("")
  const { productState,dispatch } = useContext(MyContext)
  const textInput = React.createRef();
  
  let incNum =(e,refData,data)=>{
    // setNum(Number(num)+1);
    console.log(data,"daaaata")
    textInput.current.value++
   const addedCartData = productState.product
    for(let i=0;i<addedCartData.length;i++){
        if(data.id==addedCartData[i].id){
      
            addedCartData[i] = Object.assign(addedCartData[i],{quantity:parseFloat(textInput.current.value)})
     
        }
    }
    props.claculateSubTotal(e)
  };

  let decNum = (e,refData,data) => {
    //  if(num>0)
    //  {
    //   setNum(num - 1);
    //  }
     textInput.current.value--
     const addedCartData = productState.product
     let totProd = addedCartData ? addedCartData.length:0;
     console.log(totProd,"totprooooooooood")
      for(let i=0;i<addedCartData.length;i++){
          if(data.id==addedCartData[i].id && textInput.current.value>0){
        
              addedCartData[i] = Object.assign(addedCartData[i],{quantity:parseFloat(textInput.current.value)})
       
          }
      }
      props.claculateSubTotal(e)
  }

  let handleChange = (e,item)=>{
    setNum(e.target.value)
    console.log(item.id,"iiiiiiiiiid")
  }

 
  useEffect(()=>{
    setNum(props.item.quantity)
  },[props.item.quantity])
 
  useEffect(()=>{
    setTotal(parseFloat(props.item.price*num))
    // setSubTotal((prevState)=>[...prevState,total])
  },[props.item.price,num])

//   useEffect(()=>{
//  setSubTotal((prevState)=>[...prevState,total])
//   },[props.item.price,num,total])
  
  // useEffect(()=>{
  //   props.claculateSubTotal(total)
  // },[total])
  // const calculateTotal =() =>{
  //   const calculateTotal = (total, currentItem) =>
  //   parseFloat(total + currentItem.price * (currentItem.quantity || 1));
  // }
  // if(props.item){
  //   props.item.reduce(function(total){
  //     console.log(total,"ttotlw")
  //   }, 0)
  // }
    
  
  // parseFloat(total + currentItem.price * (currentItem.quantity || 1));
  
console.log(props)
  return(
    <> 
      {
        props.item.name != "" ?
        <tr>
          <td>
          <div class="box-product-counter">
            <div><Button variant="danger" onClick={()=>dispatch({type:"REMOVE_PRODUCT_FROM_CART",index:props.indexNumber})}>X</Button></div>{" "}
            <div>{props.item.name}</div>
            </div>
          </td>
          <td>{props.item.price}</td>
          <td >  
          <div class="box-product-counter">
            <div><button class="btn btn-outline-primary" type="button" onClick={(e)=>{decNum(e,props.indexNumber,props.item)}}>-</button></div>
            <div> <input type="text"  ref={textInput} class="form-control" value={props.item.quantity?props.item.quantity:0} onChange={(e)=>{handleChange(e,props.item)}}/></div>
            <div><button class="btn btn-outline-primary" type="button" onClick={(e)=>{incNum(e,props.indexNumber,props.item)}}>+</button></div>
          </div>
      </td>
          <td>{total}{console.log(subTotal)}</td>
        </tr>
        
        :null
      }     
    </>
  );
}
