import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.scss'

import DescriptiveBox from '../../components/DescriptiveBox/DescriptiveBox'

const botw = {
            id: "e40d7101-1705-488b-9d64-23c6aa654dc7",
            item1: "0859c47d-0a23-41a3-bcb8-dd790ba0e3dd",
            item2: "a9495b58-76aa-4f88-8978-b8fddb6c9689",
            item3: "b81167d1-49c9-4925-b830-67b3e98005d5",
            title: "Game Night",
            description: "This fun filled event box is a great tool to increase engagement while building new work connections. A fun combination of food, drink, and an online game. Nothing brings the group together more than food and laughter!"}

export default class Home extends Component {
    state ={
        products: null
    }

    componentDidMount() {
        if(!this.state.products)
        axios
        .get('http://localhost:8080/products')
        .then((response) => {
            const results = response.data;
            let recentProducts = results.slice(Math.max(results.length - 3, 1))
            this.setState({
                products: recentProducts
            })
        })
        .catch((err) => console.log(err));
    }


    render() {
        if(!this.state.products) return <p>Loading...</p>
        console.log(this.state.products)

        return (
            <div className="home">
            <section>
                <h1>Welcome to Go Wild</h1>
                <p>The Remote Work Connection Builder.</p>
                <p>Engage remote workers, new hires {'&'} current employees with your Company Culture!</p>
                This is the home page
                <Link to='/select'>Choose a box</Link>            
            </section>
            <section>
                <h2>Box of the week</h2>
                <DescriptiveBox
                id={botw.id}
                item1={botw.item1}
                item2={botw.item2}
                item3={botw.item3}
                title={botw.title}
                description={botw.description} 
                 />
            </section>
            <section>
                <h2>Recently added</h2>
                <div className="recent">
                {this.state.products.map(product => (
                  <div>
                      <h3>{product.name}</h3>
                      <img src={product.image} alt={product.name}/>
                      <p>from {product.company_name}</p>
                  </div>  
                ))}
                </div>
            </section>
            <section>
                <h2>Featured small business</h2>
            </section>
            <section className="about">
                <h2>About us</h2>
                <div className="about__container">
                <div className="about__half">
                    <img className="about__image" src="https://i.kym-cdn.com/entries/icons/facebook/000/034/915/vibingcatttt.jpg" alt=""/>
                </div>
                <div className="about__half">
                    <p className="about__info">GoWild was the brain child of 5 BrainStation students, all very familiar with the challenges of studying and working remotely</p>
                    <p className="about__info">They realized the importance of maintaining a social connection with classmates, and discovered that having like-minded experience opened channels for easy conversations and connections.</p>
                    <p className="about__info">Go Wild builds experiences that create conversation and connections.</p>
                    <p className="about__info">Let us help you maintain your company culture.</p>
                </div>
                </div>
            </section>
            </div>
        )
    }   
}
