import React, {useContext} from 'react';
import {AppContext} from '../AppProvider';
import {Link} from 'react-router-dom';

export default function Item(props) {
    const { data } = props;
    const item = useContext(AppContext);
    const {addToCart} = item;
    return (
        <div>
            {
                data.map(((item,index) => {
                    return (
                        <div key={index}> 
                           <Link to={`/products/${item.id}`}><img src={item.src} alt={item.id} width="100" height="100" /></Link> 
                            <h3>{item.brand}</h3>
                            <p>{item.price}</p>
                            <button onClick={()=>addToCart(item.id)}>Add To Cart</button>
                        </div>
                    )
                }))
            }
        </div>
    )
}
