import React, { createContext, Component } from 'react';
import data from './data.json';
import history from './components/History.js'
export const AppContext = createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            cart: [],
            orderArray: [],
            isAuth: false
        }
    }

    getData = () => {
        return this.state.data
    }

    addToCart = (payload) => {
        if (!this.state.isAuth) {
            history.push('/login')
        }
        else {
            const { data, cart } = this.state
            const item = data.find(item => item.id === payload)
            this.setState({
                cart: [...cart, item]
            })
        }
    }

    getCartData = () => {
        return this.state.cart
    }

    orderDetails = (payload) => {
        const { state, data } = payload
        let temp = [state.name, state.phone, state.email, data]

        this.setState({
            orderArray: [...this.state.orderArray, temp],
            cart:[]
        })
        history.push('/orders')
    }

    validateUser = (user) => {
        console.log(user)
        if (user.userName === "admin" && user.password === "admin") {
            console.log('Yes working')
            this.setState({
                isAuth: true
            })
            history.push('/')
        }
    }

    getOrderDetails = () => {
        return this.state.orderArray
    }

    render() {
        const methods = {
            getData: this.getData,
            addToCart: this.addToCart,
            getCartData: this.getCartData,
            orderDetails: this.orderDetails,
            getOrderDetails: this.getOrderDetails,
            validateUser: this.validateUser
        }
        return (
            <div>
                <AppContext.Provider value={methods}>
                    {this.props.children}
                </AppContext.Provider>
            </div>
        )
    }
}

export default AppProvider
