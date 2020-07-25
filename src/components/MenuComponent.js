import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class MenuComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        console.log('menu component render is invoked');
        const menu = this.props.dishes.map((dish) => {
            return (
                // always give a key property when rendering a list
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default MenuComponent;
