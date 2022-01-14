import React, { Component } from 'react'
import axios from 'axios'
import './Select.scss'
import Box from '../../components/Box/Box'

const {v4: uuid} = require('uuid');


export default class Select extends Component {
    
    state = {
        boxes: null,
        products: null,
        show: false,
        currentBox: null,
        randomFood: null,
        randomDrink: null,
        randomActivity: null,
    } 

    randomBox = () => {
        //Organizes based on product categories
        let foodProducts = this.state.products.filter(product => product.category === "Food")
        let drinkProducts = this.state.products.filter(product => product.category === "Drink")
        let activityProducts = this.state.products.filter(product => product.category === "Activity")

        //Pulls a random item based on the length of the sorted product array
        let randomFood = foodProducts[Math.floor(Math.random() *foodProducts.length )];
        let randomDrink = drinkProducts[Math.floor(Math.random() *drinkProducts.length )];
        let randomActivity = activityProducts[Math.floor(Math.random() *activityProducts.length )];



        this.setState({
            randomFood: randomFood.id,
            randomDrink: randomDrink.id,
            randomActivity: randomActivity.id
        })
    }

    setSelected = (box) => {
        this.setState({
            currentBox: box
        })
    }
   
    componentDidMount() {
        axios
        .get('http://localhost:8080/boxes')
        .then((response) => {
            const results = response.data;
            this.setState({
                boxes: results
            })
        })
        .catch((err) => console.log(err));

        axios
        .get('http://localhost:8080/products')
        .then((response) => {
            const results = response.data;
            this.setState({
                products: results
            })
        })
        .catch((err) => console.log(err));
    }

    render() { 
     
        if(!this.state.boxes || !this.state.products) return <p>Loading</p>

        const standardBoxes = this.state.boxes.slice(0, 3)
        console.log('work', this.state.currentBox)
        return (
            <div className="select">
            <h1>Select your experience from the options below</h1>
            <ul>
                {standardBoxes.map(box => (
                    <>
                    <Box
                    key={box.id}
                    id={box.id}
                    isSelected={this.state.currentBox ? this.state.currentBox.id === box.id : false}
                    setSelected={this.setSelected}
                    item1={box.item1}
                    item2={box.item2}
                    item3={box.item3}
                    title={box.title} 
                    />
                    {/* <button onClick={selectBox(box.id)}>Select</button> */}
                    </>
                ))}
            </ul>
            <Box    
                    key={uuid()}
                    id={uuid()}
                    item1={this.state.randomFood}
                    item2={this.state.randomDrink}
                    item3={this.state.randomActivity}
                    title='Surprize Box' 
                    />
                    <button onClick={this.randomBox}>Surprise me / Randomize</button>                    
            </div>
        )
    }
}



