//import React from "react";
import "./CheckoutPage.scss";
import checkoutImg from "../../assets/checkout.jpg";

import React, { Component } from "react";

class CheckoutPage extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    console.log("hello");
    this.setState({
      clicked: true,
    });
    // this.moveWindow();
  };

  // moveWindow = () => {
  //   window.scrollTo({
  //     top: 100,
  //     behavior: "smooth",
  //   });
  // };

  render() {
    return (
      <>
        <div>
          <div className="heading-box">
            <h1 className="checkout-heading">
              Please confirm your box selection
            </h1>
          </div>
          <div className="final-box">
            <div className="final-box__info">
              <h2 className="final-box__title">Your Customized Box</h2>
              <p className="final-box__details">
                This fun-filled event box is a great tool to increase engagement
                while building new work connections. A fun combination of food,
                drink, and an online game. Nothing brings the group together
                more than food and laughter! The team is going to Go Wild!
              </p>
            </div>
            <div className="final-box__item">
              <p>Food</p>
              <img
                style={{ width: "100px", height: "100px" }}
                src={this.props.selectedProduct.food.image}
                alt={this.props.selectedProduct.food.name}
              />
              <div>{this.props.selectedProduct.food.name}</div>
            </div>
            <div className="final-box__item">
              <p>Drink</p>
              <img
                style={{ width: "100px", height: "100px" }}
                src={this.props.selectedProduct.drink.image}
                alt={this.props.selectedProduct.drink.name}
              />
              <div>{this.props.selectedProduct.drink.name}</div>
            </div>
            <div className="final-box__item">
              <p>Activity</p>
              <img
                style={{ width: "100px", height: "100px" }}
                src={this.props.selectedProduct.activity.image}
                alt={this.props.selectedProduct.activity.name}
              />
              <div>{this.props.selectedProduct.activity.name}</div>
            </div>
          </div>

          <div className="test">
            <h2 className="checkout-summary">Summary</h2>
            <div className="checkout-details">
              <div className="checkout-details__box">
                <p className="checkout-details__order">Order #4265</p>
                <div className="checkout-details__title">
                  <p>Your Customized Boxes</p>
                  <p className="checkout-details__title--qty">32x</p>
                </div>
                <p className="checkout-details__price">C$10.99/each</p>
                <div className="checkout-details__sub">
                  <p>Subtotal</p>
                  <p>351.68</p>
                </div>
                <div className="checkout-details__shipping">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="checkout-details__tax">
                  <p>Taxes</p>
                  <p>21.10</p>
                </div>
                <div className="checkout-details__total">
                  <p>Total</p>
                  <p>372.78</p>
                </div>
              </div>
            </div>
            <div className="checkout-details__payment">
              <p>Card on file</p>
              <p>4*** **** **** 2437</p>
            </div>
          </div>
          <div className="button-box">
            <button className="button-box__button" onClick={this.handleClick}>
              Confirm
            </button>
          </div>
          {this.state.clicked ? (
            <div className="confrim-img-box">
              <img className="confrim-img-box__img" src={checkoutImg} />
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default CheckoutPage;
