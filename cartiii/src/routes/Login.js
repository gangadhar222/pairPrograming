import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             password:''
        }
    }
    
    render() {
        return (
            <div>
                <label>User name:</label>
                <input type="text"></input>
                <br/>
                <label>Password:</label>
                <input type="password"></input>
            </div>
        )
    }
}

export default Login
