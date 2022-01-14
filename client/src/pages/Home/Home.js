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
            <section className="home__hero">
                <h1 className="home__title">Welcome to <span className="home__logo">Go Wild</span></h1>
                <p className="home__info">The Remote Work Connection Builder.</p>
                <p className="home__info">Engage remote workers, new hires {'&'} current employees with your Company Culture!</p>
                <Link className="home__button" to='/select'><p>Choose a box</p></Link>            
            </section>
            <section className="week">
                <h2 className="week__title">Box of the week</h2>
                <DescriptiveBox
                id={botw.id}
                item1={botw.item1}
                item2={botw.item2}
                item3={botw.item3}
                title={botw.title}
                description={botw.description} 
                 />
            </section>
            <section className="recent">
                <h2 className="recent__title">Recently added</h2>
                <div className="recent__container">
                {this.state.products.map(product => (
                  <div className="recent__product">
                      <h3 className="recent__name">{product.name}</h3>
                      <img className="recent__image" src={product.image} alt={product.name}/>
                      <p className="recent__company">from {product.company_name}</p>
                  </div>  
                ))}
                </div>
            </section>
            <section className="featured">
                <h2 className="featured__title">Featured small business</h2>
                <div className="featured__container">
                    <p className="featured__info">The newest <span className="featured__logo">Go Wild</span> food feature is "Food Truck" adventure. We have connected the coolest food truck experiences into one great Box. You will receive a selection of food, drinks, and desserts from Vancouver's sough-after, on wheels, gourmet adventures. We've matched this with Game Night!</p>
                    <span className="featured__button">Read More</span>
                </div>
                <div className="featured__container">
                    <p className="featured__info"><span className="featured__logo">Go Wild</span> is so excited to offer the "Cabaret Box"! An evening of entertainment accompanied with a charcuterie plate, and a bottle of bubbles. Enjoy a virtual evening of either music or live theatre! We've reserved the best seats in the house for your remote workforce!</p>
                    <span className="featured__button">Read More</span>
                </div>
                <span className="featured__load">Load More</span>
            </section>
            <section className="about">
                <h2 className="about__title">About us</h2>
                <div className="about__container">
                <div className="about__bork">
                    <h1 className="about__big">Go Wild</h1>
                </div>
                <div className="about__half">
                    <p className="about__inf"><span className="about__logo">GoWild</span> was the brain child of 5 BrainStation students, all very familiar with the challenges of studying and working remotely</p>
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
