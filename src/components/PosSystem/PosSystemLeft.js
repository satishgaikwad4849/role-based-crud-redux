import React, { useState,useContext,useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import MyContext from './context'
import ListGroup from 'react-bootstrap/ListGroup'
import { ProductItem } from './Product_list';

function PosSystemLeft(){
    const [checkQty,setCheckQty]=useState(0)
    const { productState } = useContext(MyContext);
    const claculateSubTotal=(total)=>{
      console.log(total,"total")
      setCheckQty(total)
    }
const subTotal=productState.product.reduce((a,v)=>a+v.price,0)

useEffect(() => {

}, [checkQty])

const getRightPriceDetail = () => {
    
    const addedCartData = productState.product
    let totalPriceactual  = 0;
    console.log(addedCartData,"pros")
    if(addedCartData){
    for(let i=0;i<addedCartData.length;i++){
        console.log(addedCartData[i],"addcartdata")
        totalPriceactual += addedCartData[i].price*addedCartData[i].quantity;
    }
}
    return(
                <div className="total">Total: {totalPriceactual}</div>
    )
}
    return(
        <>
        <div className="box-posSystemLeft">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        productState.product.length > 0? productState.product.map((item,index)=>(    
                        <ProductItem indexNumber={index} item={item} claculateSubTotal={claculateSubTotal}/>)):null
                     }
                </tbody>
            </Table>
            </div>
            <div style={{textAlign:"left"}} >
                <div className="box-posSystemBottom">        
                <ListGroup>
                    <ListGroup.Item>
                        <div className="list-item">
                            <div>SubTotal</div>
                            <div>{getRightPriceDetail()}</div>
                            <div>{subTotal}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="list-item">
                            <div>VAT Tax</div>
                            <div>SubTotal</div>
                            <div>3949</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="list-item">
                            <div>Discount</div>
                            <div>SubTotal</div>
                            <div>3949</div>
                        </div> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="list-item">
                            <div>Total</div>
                            <div>SubTotal</div>
                            <div>3949</div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                </div>
            </div>
            </>
    )
}

export default PosSystemLeft;
