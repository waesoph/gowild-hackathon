import React, { Component } from 'react'
import axios from 'axios';
import './DescriptiveBox.scss'

export default class DescriptiveBox extends Component {
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
        if(!this.state.products) return <p>Loading</p>
        console.log(this.state.products)
        console.log(this.props)

        const propsID = this.props.id;

        return (
            <div className="dbox">
                <div className="dbox__main">
                <div className="dbox__top">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="dbox__container">
                <div>
                        <h3>{this.state.products[0].category}</h3>
                        <img className="dbox__image" src={this.state.products[0].image} alt={this.state.products[0].name}/>
                        <h4>{this.state.products[0].name}</h4>
                    </div>
                    <div>
                        <h3>{this.state.products[1].category}</h3>
                        <img className="dbox__image" src={this.state.products[1].image} alt={this.state.products[0].name}/>
                        <h4>{this.state.products[1].name}</h4>
                    </div>
                    <div>
                        <h3>{this.state.products[2].category}</h3>
                        <img className="dbox__image" src={this.state.products[2].image} alt={this.state.products[0].name}/>
                        <h4>{this.state.products[2].name}</h4>
                    </div>
                </div>                    
                </div>                
            </div>
        )
    }
}