(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{474:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(6),i=a(8),l=a(7),m=a(9),o=a(0),c=a.n(o),r=(a(474),a(69)),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value,sendStatus:""}),a.setState({sendStatus:""})},a.onEmailChange=function(e){a.setState({email:e.target.value,sendStatus:""}),a.setState({sendStatus:""})},a.onMessageChange=function(e){a.setState({message:e.target.value}),a.setState({sendStatus:""})},a.onSubmit=function(){0===a.state.email.length||0===a.state.message.length||0===a.state.name.length?a.setState({sendStatus:"Empty field"}):(a.setState({sendStatus:"Sending ..."}),fetch("https://secure-waters-51389.herokuapp.com/contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,message:a.state.message,name:a.state.name})}).then(function(e){return e.json()}).then(function(e){e&&(a.setState({message:"",email:"",name:""}),a.setState({sendStatus:"Message Sent!"}))}).catch(function(e){console.log(e),a.setState({sendStatus:"Opsss, something went wrong!"})}))},a.state={email:"",message:"",name:"",sendStatus:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.setSection("Contact")}},{key:"render",value:function(){return c.a.createElement(r.a,{title:"Cage the Elephant - Contact"},c.a.createElement("div",{id:"contact",className:"container-position"},c.a.createElement("div",{id:"wrap"},c.a.createElement("div",{id:"form_wrap"},c.a.createElement("div",{id:"form"},c.a.createElement("p",null,"Dear Cage,"),c.a.createElement("textarea",{name:"message",placeholder:"Your message",id:"message",value:this.state.message,onChange:this.onMessageChange,required:!0}),c.a.createElement("p",null,"Best,"),c.a.createElement("label",{htmlFor:"name"},"Name: "),c.a.createElement("input",{type:"text",name:"name",id:"name",value:this.state.name,onChange:this.onNameChange,required:!0}),c.a.createElement("label",{htmlFor:"email"},"Email: "),c.a.createElement("input",{type:"email",name:"email",id:"email",value:this.state.email,onChange:this.onEmailChange,required:!0}),c.a.createElement("input",{type:"submit",name:"submit",value:"Send, we'll contact you soon!",id:"btnSubmit",onClick:this.onSubmit}),c.a.createElement("h4",{className:"sendstatus",style:{fontStyle:"italic"}},this.state.sendStatus))))))}}]),t}(c.a.Component);t.default=u},69:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(82);t.a=function(e){return s.a.createElement("div",{className:"layout"},s.a.createElement(i.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,e.title),s.a.createElement("link",{rel:"canonical",href:"https://lucasbertolo.github.io/cage-the-elephant/"})),e.children)}}}]);
//# sourceMappingURL=12.26bae187.chunk.js.map