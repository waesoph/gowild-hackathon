import React, { Component } from 'react'
import axios from 'axios';
import './Box.scss'

export default class Box extends Component {
    state = {
        products: null
    }

    componentDidMount() {
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
        if(!this.state.products) return <p>Loading</p>
        console.log(this.state.products)
        console.log(this.props)

        return (
            <div className="box">
                <div className="box__top">
                    <h2>{this.props.title}</h2>
                    <button>Select</button>
                </div>
                <div className="box__main">
                    <div>
                        <h3>{this.state.products[0].category}</h3>
                        <h4>{this.state.products[0].name}</h4>
                        <img className="box__image" src={this.state.products[0].image} alt={this.state.products[0].name}/>
                    </div>
                    <div>
                        <h3>{this.state.products[1].category}</h3>
                        <h4>{this.state.products[1].name}</h4>
                        <img className="box__image" src={this.state.products[1].image} alt={this.state.products[0].name}/>
                    </div>
                    <div>
                        <h3>{this.state.products[2].category}</h3>
                        <h4>{this.state.products[2].name}</h4>
                        <img className="box__image" src={this.state.products[2].image} alt={this.state.products[0].name}/>
                    </div>
                </div>                
            </div>
        )
    }
}
