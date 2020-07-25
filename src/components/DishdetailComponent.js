import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        if(comments != null) {
            const commentList = comments.map((singleComment) => {
                return (
                        <ul key={singleComment.id} className="list-unstyled">
                            <li>{singleComment.comment}</li>
                            <li>-- {singleComment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(singleComment.date)))}</li>
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

    const Dishdetail = (props) => {
        if(props.selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.selectedDish} />
                        </div>
                        <RenderComments comments={props.selectedDish.comments} />
                    </div>
                </div>
            );
        } 
        return (
            <div></div>
        );
    }
        



export default Dishdetail;
