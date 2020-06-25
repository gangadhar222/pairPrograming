import React from 'react';
import {AppContext} from '../AppProvider';

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name:'', 
            phone:'', 
            email:''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {getCartData,orderDetails,getOrderDetails} = this.context;
        const data = getCartData();
        const orderData = getOrderDetails();
        console.log(orderData)
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input name='name' type="text" onChange={(e)=>{this.handleChange(e)}} />
                    <label>Mobile</label>
                    <input name='phone' type="text" onChange={(e)=>{this.handleChange(e)}} />
                    <label>Email</label>
                    <input name='email'  type="text" onChange={(e)=>{this.handleChange(e)}} />
                    <button onClick={()=>orderDetails({state:this.state,data:data})}>Place Order</button>
                </div>
                {
                    data.map((item => {
                        return (
                            <div style={{ border: "1px solid black", display: "flex", flexDirection: "column" }}>
                                <img src={item.src} alt={item.id} width="100" height="100" />
                                <h3>{item.brand}</h3>
                                <p>{item.price}</p>
                            </div>
                        )
                    }))
                }
            </div>
        )
    }
}

Cart.contextType = AppContext;
export default Cart;