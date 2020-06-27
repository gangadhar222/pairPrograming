import React, { useContext } from 'react';
import {AppContext} from '../AppProvider';


export default function Orders() {
    const data = useContext(AppContext);
    const { getOrderDetails } = data;
    const orderArray = getOrderDetails();
    return (
        <div>
            {
                orderArray.map((item => {
                    return (
                        <div style={{ border: "1px solid black", display: "flex", flexDirection: "column" }}>
                            <h3>User details</h3>
                            <p>Name: {item[0]}</p>
                            <p>Mobile: {item[1]}</p>
                            <p>Email: {item[2]}</p>
                            <h3>Order Summary</h3>
                            {item[3].map(item => {
                                return (
                                    <div>
                                        <img src={item.src} alt={item.id} width="100" height="100" />
                                        <h3>{item.brand}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                }))
            }
        </div>
    )
}

