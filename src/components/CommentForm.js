// import React, { Component } from "react";
// import { Button, Row, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
// import { Control, LocalForm, Errors } from "react-redux-form";

// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;

// class CommentForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isModalOpen: false,
//     };

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleSubmitComment = this.handleSubmitComment.bind(this);
//   }

//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen,
//     });
//   }

//   handleSubmitComment(values) {
//     this.toggleModal();
//     console.log("Current state is:" + JSON.stringify(values));
//     alert("Current state is:" + JSON.stringify(values));
//   }

//   render() {
//     return (
//       <>
//         <Button outline onClick={this.toggleModal}>
//           <span className="fa fa-pencil fa-lg"></span> Submit Comment
//         </Button>

//         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal()}>
//           <ModalHeader toggle={this.toggleModal()}>Submit Comment</ModalHeader>
//           <ModalBody>
//             <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
//               <Row className="form-group">
//                 <Label htmlFor="rating">Rating</Label>
//                 <Control.select
//                   model=".rating"
//                   name="rating"
//                   className="form-control"
//                 >
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </Control.select>
//               </Row>
//               <Row className="form-group">
//                 <Label htmlFor="yourname">Your Name</Label>
//                 <Control.text
//                   model=".yourname"
//                   placeholder="Your Name"
//                   id="yourname"
//                   name="yourname"
//                   className="form-control"
//                   validators={{
//                     minLength: minLength(3),
//                     maxLength: maxLength(15),
//                   }}
//                 />
//                 <Errors
//                   className="text-danger"
//                   model=".yourname"
//                   show="touched"
//                   messages={{
//                     minLength: "Must be greater than 2 characters",
//                     minLength: "Must be 15 characters or less",
//                   }}
//                 />
//               </Row>
//               <Row className="form-group">
//                 <Label htmlFor="comment">Comment</Label>
//                 <Control.textarea
//                   model=".comment"
//                   id="comment"
//                   name="comment"
//                   rows="6"
//                   className="form-control"
//                 />
//               </Row>
//               <Button type="submit" value="submit" color="primary">
//                 Submit
//               </Button>
//             </LocalForm>
//           </ModalBody>
//         </Modal>
//       </>
//     );
//   }
// }

// export default CommentForm;
