import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderMenuItem({ dish, onClick }) {
        return (
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
        
    const MenuComponent = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                // always give a key property when rendering a list
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
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
       
export default MenuComponent;
