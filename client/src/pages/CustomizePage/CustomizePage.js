import React, { Component } from "react";
import axios from "axios";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import "./CustomizePage.scss";

class CustomizePage extends Component {
  state = {
    productData: [],
    foodCategory: [],
    drinkCategory: [],
    activityCategory: [],
    selectedProduct: [],
  };

  fetchProductDetails = () => {
    axios
      .get("http://localhost:8080/products/")
      .then((res) => {
        this.setState({
          productData: res.data,
          foodCategory: res.data.filter(
            (product) => product.category === "Food"
          ),
          drinkCategory: res.data.filter(
            (product) => product.category === "Drink"
          ),
          activityCategory: res.data.filter(
            (product) => product.category === "Activity"
          ),
        });
      })
      .catch((err) => {
        console.log("err");
      });
  };
  componentDidMount() {
    this.fetchProductDetails();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/checkout");
  };
  handleOnChange = (e) => {
    const product = this.state.productData.find((product) => {
      return product.name === e.target.value;
    });

    this.setState({
      selectedProduct: {
        ...this.state.selectedProduct,
        [e.target.name]: product,
      },
    });

    // console.log(e.target.value);
  };

  render() {
    console.log(this.state.foodCategory[0]);
    console.log(this.state.activityCategory);

    if (this.props.location.pathname === "/checkout") {
      return <CheckoutPage selectedProduct={this.state.selectedProduct} />;
    }
    return (
      <div>
        <div className="customize-heading-box">
          <h1>Customize your experience</h1>
          <h1> from the options below</h1>
        </div>

        <div>
          <div className="customize-container">
            <div className="customize-container__intro">
              <h2 className="customize-container__title">Game Night Box</h2>
              <p className="customize-container__details">
                This fun-filled event box is a great tool to increase engagement
                while building new work connections. A fun combination of food,
                drink, and an online game. Nothing brings the group together
                more than food and laughter! The team is going to Go Wild!
              </p>
            </div>

            <div>
              <form className="customize-form" onSubmit={this.handleSubmit}>
                <div className="customize-box">
                  <div className="customize-box__option">
                    <label htmlFor="food">Food</label>
                    {this.state.selectedProduct.food && (
                      <div>
                        <div className="">
                          <img
                            className=""
                            style={{ width: "100px", height: "100px" }}
                            src={this.state.selectedProduct.food.image}
                            alt={this.state.selectedProduct.food.name}
                          />
                        </div>
                      </div>
                    )}
                    <select name="food" onChange={this.handleOnChange}>
                      <option disabled selected>
                        Please select
                      </option>
                      {this.state.foodCategory.map((food) => (
                        <option
                          key={food.id}
                          name="foodCategory"
                          value={food.name}
                        >
                          {food.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="customize-box__option">
                    <label htmlFor="drink">Drink </label>
                    {this.state.selectedProduct.drink && (
                      <div>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={this.state.selectedProduct.drink.image}
                          alt={this.state.selectedProduct.drink.name}
                        />
                      </div>
                    )}
                    <select name="drink" onChange={this.handleOnChange}>
                      <option disabled selected>
                        Please select
                      </option>
                      {this.state.drinkCategory.map((drink) => (
                        <option
                          key={drink.id}
                          name="drinkCategory"
                          value={drink.name}
                        >
                          {drink.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="customize-box__option">
                    <label htmlFor="activity">Activity</label>
                    {this.state.selectedProduct.activity && (
                      <div>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={this.state.selectedProduct.activity.image}
                          alt={this.state.selectedProduct.activity.name}
                        />
                      </div>
                    )}
                    <select name="activity" onChange={this.handleOnChange}>
                      <option disabled selected>
                        Please select
                      </option>
                      {this.state.activityCategory.map((activity) => (
                        <option
                          key={activity.id}
                          name="activityCategory"
                          value={activity.name}
                        >
                          {activity.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="customize-button-container">
                  <button
                    className="customize-button"
                    onClick={this.handleConfirm}
                  >
                    Confrim Box Selection
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomizePage;
