import React, { Component } from 'react'
import axios from 'axios'
import './Select.scss'

import Box from '../../components/Box/Box'

export default class Select extends Component {
    state = {
        boxes: null,
        products: null
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
    }


    render() {

        if(!this.state.boxes) return <p>Loading</p>
        console.log(this.state.boxes)
        const standardBoxes = this.state.boxes.slice(0, 3)
        return (
            <>
            <h1>Select your experience from the options below</h1>
            <div>
                <button>Surprise me / Randomize</button>
                <button>Select Date</button>
            </div>
            <ul>
                {standardBoxes.map(box => (
                    <Box
                    key={box.id}
                    id={box.id}
                    item1={box.item1}
                    item2={box.item2}
                    item3={box.item3}
                    title={box.title} 
                    />
                ))}
            </ul>
            </>
        )
    }
}

