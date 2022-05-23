import React, { useReducer,useState,useContext } from 'react'
import PosSystemLeft from './PosSystemLeft'
import PosSystemRight from './PosSystemRight'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyContext from './context'
import { ProductList } from './constants'

const initialState = {
  productData:ProductList,
  product:[]
  };

 const PosSystem =()=>{
     const [productState, dispatch]=useReducer(reducer,initialState)

     function reducer(state=initialState, action) {
console.log(action,"aaaaaaact")
         switch (action.type) {
           case "ADD_PRODUCT_TO_CART":

            const updateQuantity = p =>{
             return p.quantity ? { ...p, quantity: p.quantity + 1 } : { ...p, quantity: 2 };
            }

            const productPayload=action.myProduct

            const productInCart = state.product.find(p => p.id === productPayload.id);

            if (!productInCart) return {...state,product:[...state.product, productPayload]};

            return {
              ...state,
              product:state.product.map(p => {
              if (p.id === productPayload.id) {
                return updateQuantity(p);
              }
              return p;
            })
          }     
          case "REMOVE_PRODUCT_FROM_CART":
            return {
              ...state,
              product:[...state.product.slice(0, action.index), ...state.product.slice(action.index + 1)]
            };
          default: {
            return state;
          }
        }
      }
          
   
    return(
        <Container>
            <Row>
                <MyContext.Provider value={{productState,dispatch}}>
                    <Col md={5}>
                      
                        <PosSystemLeft/>
                      
                        {/* <div className="box-posSystemBottom">
                         <PosSystemBottom/>
                        </div> */}
                    </Col>
                    <Col md={7}>
                        <PosSystemRight/>
                    </Col>
                </MyContext.Provider>
            </Row>
        </Container>
    )
}

export default PosSystem;