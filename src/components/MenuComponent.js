import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class MenuComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }

        console.log('menu component constructor is invoked');
    }

    componentDidMount() {
        console.log('menu component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish})
    }


    render() {
        console.log('menu component render is invoked');
        const menu = this.props.dishes.map((dish) => {
            return (
                // always give a key property when rendering a list
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }); 

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <DishdetailComponent selectedDish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}

export default MenuComponent;
