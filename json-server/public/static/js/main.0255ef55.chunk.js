(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(100),t(101),t(102),t(103),t(20)),c=t(21),m=t(23),i=t(22),u=t(45),d=t(153),E=t(154),h=t(155),f=t(156),p=t(157),g=t(158),b=t(10),N=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},v="http://localhost:3001/";function y(e){var a=e.dish;return r.a.createElement(d.a,null,r.a.createElement(b.b,{to:"/menu/".concat(a.id)},r.a.createElement(E.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,a.name))))}var O=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(y,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMessage?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMessage))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},w=t(19),M=t(159),L=t(180),k=t(160),j=t(161),S=t(162),C=t(163),D=t(164),F=t(165),x=t(9),A=t(28),I=function(e){return function(a){return!a||a.length<=e}},T=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleSubmitComment=n.handleSubmitComment.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmitComment",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.yourname,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(L.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(j.a,null,r.a.createElement(x.LocalForm,{onSubmit:function(e){return a.handleSubmitComment(e)}},r.a.createElement(S.a,{className:"form-group m-1"},r.a.createElement(C.a,{htmlFor:"rating"},"Rating"),r.a.createElement(x.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement(S.a,{className:"form-group m-1"},r.a.createElement(C.a,{htmlFor:"yourname"},"Your Name"),r.a.createElement(x.Control.text,{model:".yourname",placeholder:"Your Name",id:"yourname",name:"yourname",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:I(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".yourname",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})),r.a.createElement(S.a,{className:"form-group m-1"},r.a.createElement(C.a,{htmlFor:"comment"},"Comment"),r.a.createElement(x.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})),r.a.createElement(M.a,{type:"submit",color:"primary"},"Submit")))))}}]),t}(n.Component);function R(e){var a=e.dish;return null!=a?r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(F.a,null,a.description)))):r.a.createElement("div",null)}function _(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},a.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," ,"," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(T,{dishId:n,postComment:t})):r.a.createElement("div",null)}var P=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMessage?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMessage))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement(g.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(R,{dish:e.dish})),r.a.createElement(_,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},q=t(166),H=t(167),Y=t(168),G=t(169),U=t(170),W=t(171),B=t(172),K=t(173),z=t(174),J=t(175),Z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"Password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(H.a,{onClick:this.toggleNav}),r.a.createElement(Y.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(G.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(U.a,{navbar:!0},r.a.createElement(W.a,null,r.a.createElement(b.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(W.a,null,r.a.createElement(b.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(W.a,null,r.a.createElement(b.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(W.a,null,r.a.createElement(b.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(U.a,{className:"ml-auto",navbar:!0},r.a.createElement(W.a,null,r.a.createElement(M.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(B.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(L.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},"Login"),r.a.createElement(j.a,null,r.a.createElement(K.a,{onSubmit:this.handleLogin},r.a.createElement(z.a,null,r.a.createElement(C.a,{htmlFor:"username"},"Username"),r.a.createElement(J.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(z.a,null,r.a.createElement(C.a,{htmlFor:"password"},"Password"),r.a.createElement(J.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(z.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(J.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(M.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var $=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},Q=t(176);function V(e){var a=e.item,t=e.isLoading,n=e.errMessage;return t?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:v+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(Q.a,null,a.designation):null,r.a.createElement(F.a,null,a.description))))}var X=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(V,{item:e.dish,isLoading:e.dishesLoading,errMessage:e.dishesErrMessage})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(V,{item:e.promotion,isLoading:e.promosLoading,errMessage:e.promosErrMessage})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(V,{item:e.leader,isLoading:e.leadersLoading,errMessage:e.leadersErrMessage}))))},ee=t(177),ae=function(e){return e&&e.length},te=function(e){return function(a){return!a||a.length<=e}},ne=function(e){return function(a){return a&&a.length>=e}},re=function(e){return!isNaN(Number(e))},le=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),console.log("Current state is:"+JSON.stringify(e)),alert("Thank you for your feedback!"),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(ee.a,{md:10},r.a.createElement(x.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(ee.a,{md:10},r.a.createElement(x.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(ee.a,{md:10},r.a.createElement(x.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15),isNum:re}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 number",maxLength:"Must be 15 numbers or less",isNum:"Must be a number"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(ee.a,{md:10},r.a.createElement(x.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,validEmail:le}}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(ee.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(C.a,{check:!0},r.a.createElement(x.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(ee.a,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",className:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(ee.a,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(ee.a,{md:{size:10,offset:2}},r.a.createElement(M.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),oe=t(178),ce=t(179);function me(e){var a=e.singleLeader;return r.a.createElement(oe.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-2"},r.a.createElement(oe.a,{left:!0},r.a.createElement(oe.a,{object:!0,src:v+a.image,alt:"Leader Image"}))),r.a.createElement("div",{className:"col-12 col-md mb-4"},r.a.createElement(oe.a,{body:!0},r.a.createElement(oe.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),a.description)))))}var ie=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(ce.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(D.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(D.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(oe.a,{list:!0},r.a.createElement(A.Stagger,{in:!0},e.leaders.leaders.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement(me,{singleLeader:e}))})))))))},ue=t(11),de=t(26),Ee={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},he=function(){return{type:"DISHES_LOADING"}},fe=function(e){return{type:"DISHES_FAILED",payload:e}},pe=function(e){return{type:"ADD_DISHES",payload:e}},ge=function(){return{type:"LEADERS_LOADING"}},be=function(e){return{type:"LEADERS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_LEADERS",payload:e}},ve=function(){return{type:"PROMOS_LOADING"}},ye=function(e){return{type:"PROMOS_FAILED",payload:e}},Oe=function(e){return{type:"ADD_PROMOS",payload:e}},we=function(e){return{type:"COMMENTS_FAILED",payload:e}},Me=function(e){return{type:"ADD_COMMENTS",payload:e}},Le=t(57),ke=t(89),je=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Le.a,null,r.a.createElement(ke.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(X,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMessage:e.props.dishes.errMessage,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMessage:e.props.promotions.errMessage,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMessage:e.props.leaders.errMessage})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(O,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t,n=a.match;return r.a.createElement(P,(t={dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(n.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMessage:e.props.dishes.errMessage,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(n.params.dishId,10)}))},Object(u.a)(t,"errMessage",e.props.comments.errMessage),Object(u.a)(t,"postComment",e.props.postComment),t))}}),r.a.createElement(ue.b,{path:"/aboutus",component:function(){return r.a.createElement(ie,{leaders:e.props.leaders})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(se,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement($,null))}}]),t}(n.Component),Se=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,promotions:e.promotions,comments:e.comments,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(v+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post Comments ",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(he(!0)),fetch(v+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(fe(a.message))}))}))},fetchComments:function(){e((function(e){return fetch(v+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Me(a))})).catch((function(a){return e(we(a.message))}))}))},fetchPromos:function(){e((function(e){return e(ve(!0)),fetch(v+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Oe(a))})).catch((function(a){return e(ye(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(ge(!0)),fetch(v+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(be(a.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))},postFeedback:function(a,t,n,r,l,s,o){return e(function(e,a,t,n,r,l,s){return function(o){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s};return fetch(v+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("Form submit feedback ",e.message),alert("Your feedback could not be submitted\nError: "+e.message)}))}}(a,t,n,r,l,s,o))}}}))(je)),Ce=(t(151),t(7)),De=t(27),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMessage:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:null,dishes:a.payload});case"DISHES_LOADING":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,errMessage:null,dishes:[]});case"DISHES_FAILED":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:a.payload,dishes:[]});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMessage:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENT":var t=a.payload;return Object(Ce.a)(Object(Ce.a)({},e),{},{comments:e.comments.concat(t)});case"ADD_COMMENTS":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:a.payload,comments:[]});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMessage:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,errMessage:null,promotions:[]});case"PROMOS_FAILED":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:a.payload,promotions:[]});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMessage:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,errMessage:null,leaders:[]});case"LEADERS_FAILED":return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:a.payload,leaders:[]});default:return e}},Te=t(92),Re=t(93),_e=t.n(Re),Pe=Object(De.createStore)(Object(De.combineReducers)(Object(Ce.a)({dishes:Fe,comments:xe,promotions:Ae,leaders:Ie},Object(x.createForms)({feedback:Ee}))),Object(De.applyMiddleware)(Te.a,_e.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:Pe},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(Se,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,a,t){e.exports=t(152)}},[[95,1,2]]]);
//# sourceMappingURL=main.0255ef55.chunk.js.map