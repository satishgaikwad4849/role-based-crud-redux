import React, { useContext } from 'react'
import MyContext from './context'
import { ProductList } from './constants'

function PosSystemRight(){
  const {dispatch } = useContext(MyContext)

    return(
        <div class="container mt-3" class="d-flex flex-wrap text-white bg-light">
            {ProductList.map((product)=>
              <div >
                <div class="p-2 border m-1" onClick={()=>dispatch({type:"ADD_PRODUCT_TO_CART",myProduct:product})}>
                    <img src={product.image}  alt = "" className="img-responsive" width="90" height="65"/>
                </div>
            </div>
             )}
        </div>
    )
}
export default PosSystemRight;
