import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseURL} from '../shared/baseURL';

function RenderCard({ item, isLoading, errMessage }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMessage) {
    return <h4>{errMessage}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={baseURL + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMessage={props.dishesErrMessage}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} 
          isLoading={props.promosLoading}
          errMessage={props.promosErrMessage}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
