import React, { Component } from 'react';

import MenuComponent from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDishId: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDishId: dishId})
  }

  render() {
    return (
      <div>
        <Header />
        <MenuComponent dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishdetailComponent 
        selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDishId)[0]} />
        <Footer />
      </div>
      
    );
  }
}


export default Main;
