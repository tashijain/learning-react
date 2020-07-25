import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishdetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments != null) {
            const commentList = comments.map((singleComment) => {
                return (
                        <ul key={singleComment.id} className="list-unstyled">
                            <li>{singleComment.comment}</li>
                            <li>-- {singleComment.author} , {singleComment.date}</li>
                        </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4> 
                    {commentList}
                </div>
            );
        } else {
            return (
            <div></div>
            );
        }
    }

    render() {
        let comments = [];
        if(this.props.selectedDish != null) {
            comments = this.props.selectedDish['comments'];
        } else {
            comments = null;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    {this.renderComments(comments)}
                </div>
            </div>
        );
    }
}



export default DishdetailComponent;
