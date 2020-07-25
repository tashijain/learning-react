import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // short form react.fragment which allows to group togehter React elements
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience.
                            Our lipsmacking creations will tickle your culinary senses!
                        </p>
                    </div>
                </div>
            </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;