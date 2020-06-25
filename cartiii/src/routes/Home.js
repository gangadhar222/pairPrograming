import React, { Component } from 'react';
import Item from '../components/Item';
import { AppContext } from '../AppProvider';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionName: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            optionName: e.target.value
        })
    }

    render() {
        const { getData } = this.context;
        const data = getData();
        console.log(this.state.optionName)
        return (
            <div style={{ margin: "1rem 5rem" }}>
                <select onChange={this.handleChange}>
                    <option value="all">All</option>
                    {
                        data.map((item, index) => {
                            return (
                                <option key={index} value={item.brand}>{item.brand}</option>
                            )
                        })
                    }
                </select>
                <Item data={data.filter(item => {
                    if (this.state.optionName == "all" || this.state.optionName==""){
                        return true;
                    }
                    else if (item.brand === this.state.optionName){
                        return true;
                    }
                    })
                }
                />
            </div>
        )
    }
}

Home.contextType = AppContext;
export default Home;