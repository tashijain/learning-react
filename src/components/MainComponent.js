import React, { Component } from 'react';

import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // selectedDishId: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDishId: dishId})
  // }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* in-line function component to be able to pass in props */}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/> */}
        {/* <Dishdetail 
        selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDishId)[0]} /> */}
        <Footer />
      </div>
      
    );
  }
}


export default Main;
