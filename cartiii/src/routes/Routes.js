import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetails from '../components/ProductDetails';
import Login  from './Login';
import Cart from './Cart';
import Orders from './Orders';

const Routes = () => {
    return (
        <div>
                <Switch>
                    <Route exact path="/" render={()=><Home />} />
                    <Route exact path="/products" render={()=><Products />} />
                    <Route path="/products/:id" render={(props)=><ProductDetails {...props}/>} />
                    <Route path="/login" component = {Login}/>
                    <Route path="/cart" render={()=><Cart />} />
                    <Route path="/orders" render={()=><Orders />} />
                </Switch>
        </div>
    )
}

export default Routes;
