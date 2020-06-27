import React, { Component } from 'react';
import {AppContext} from '../AppProvider';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             password:''
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {validateUser} = this.context;
        return (
            <div>
                <h1>Login Page</h1>
                <label>User name:</label>
                <input type="text" name="userName" onChange={(e)=>this.handleChange(e)}></input>
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={()=>validateUser(this.state)}>Login</button>
            </div>
        )
    }
}

Login.contextType = AppContext;
export default Login
