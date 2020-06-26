import React from 'react';
import { AppContext } from '../AppProvider';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        const { getData } = this.context;
        const data = getData();
        console.log(data)
        return (
            <div>
                {data.map(item => {
                    return (
                        <div style={{ margin: "1rem 5rem" }} key={item.id}>
                            <img src={item.src} alt={item.id} width="100" height="100" />
                            <h3>{item.brand}</h3>
                            <p>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Products.contextType = AppContext;
export default Products;