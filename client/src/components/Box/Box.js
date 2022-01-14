import React, { Component } from 'react'
import axios from 'axios';
import './Box.scss'

export default class Box extends Component {
    state = {
        products: null
    }

    componentDidMount() {
        if(!this.state.products)
        axios
        .get('http://localhost:8080/products')
        .then((response) => {
            const results = response.data;
            let rightProducts = results.filter(product => {
                return product.id === this.props.item1 || product.id === this.props.item2 || product.id === this.props.item3;
            })

            this.setState({
                products: rightProducts
            })
        })
        .catch((err) => console.log(err));
    }



    render() {
        // if(!this.props.show) return null
        if(!this.state.products) return <p>Loading</p>
        console.log(this.state.products)
        console.log(this.props)

        const propsID = this.props.id;
        const defaultImg = 'https://img.buzzfeed.com/buzzfeed-static/static/2020-03/5/23/enhanced/25a67c968a0a/enhanced-262-1583449224-1.png?output-format=jpg&output-quality=auto'

        return (
            <div className="box">
                <div className="box__top">
                    <h2>{this.props.title}</h2>
                    <button onClick={()=>this.props.setSelected(this.props)}>Select</button>
                </div>
                <div className="box__main">
                    <div>
                        <h3>{this.state.products[0] ? this.state.products[0].category : 'Food'}</h3>
                        <h4>{this.state.products[0] ? this.state.products[0].name : '?'}</h4>
                        <img className="box__image" src={this.state.products[0] ? this.state.products[0].image : defaultImg } alt={this.state.products[0] ? this.state.products[0].image : ''}/>
                    </div>
                    <div>
                        <h3>{this.state.products[1] ? this.state.products[1].category : 'Drink'}</h3>
                        <h4>{this.state.products[1] ? this.state.products[1].name : '?'}</h4>
                        <img className="box__image" src={this.state.products[1] ? this.state.products[1].image : defaultImg } alt={this.state.products[0] ? this.state.products[0].image : ''}/>
                    </div>
                    <div>
                        <h3>{this.state.products[2] ? this.state.products[2].category : 'Activity'}</h3>
                        <h4>{this.state.products[2] ? this.state.products[2].name : '?'}</h4>
                        <img className="box__image" src={this.state.products[2] ? this.state.products[2].image : defaultImg } alt={this.state.products[0] ? this.state.products[0].image : ''}/>
                    </div>
                </div>                
            </div>
        )
    }
}
