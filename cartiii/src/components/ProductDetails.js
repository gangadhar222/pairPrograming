import React from 'react';
import { AppContext } from '../AppProvider';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const { getData } = this.context;
        const data = getData();
        const id = this.props.match.params.id
        const newItem = data.find(item => item.id === id)
        this.setState({
            data: newItem
        })
    }

    render() {
        console.log(this.props)
        const {data} = this.state
        return (
            <div>
                <img src={data.src} alt={data.id} width="100" height="100" />
                <h3>{data.brand}</h3>
                <p>{data.price}</p>
            </div>
        )
    }
}

ProductDetails.contextType = AppContext;
export default ProductDetails;