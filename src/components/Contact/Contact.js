import React from 'react';
import './Contact.css';
import Layout from '../Layout';

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			message: '',
			name: '',
			sendStatus: ''
		}
	}

	componentDidMount(){
		this.props.setSection('Contact');
	}
	
	onNameChange = (event) => {
		this.setState({name: event.target.value, sendStatus: ''});
		this.setState({sendStatus: ''});
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value, sendStatus: ''});
		this.setState({sendStatus: ''});
	}
	onMessageChange = (event) => {
		this.setState({message: event.target.value});
		this.setState({sendStatus: ''});
	}

	onSubmit = () => {	

		if(this.state.email.length === 0 || this.state.message.length === 0 || this.state.name.length === 0){
			this.setState({sendStatus: 'Empty field'})
		} else {
			this.setState({sendStatus: 'Sending ...'})
			fetch('https://secure-waters-51389.herokuapp.com/contact', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					message: this.state.message,
					name: this.state.name
				})
			})
				.then(response => response.json())
				.then(message => {
					if(message){
						this.setState({message: '', email: '', name: ''})
						this.setState({sendStatus: 'Message Sent!'})
					} 
				})	
				.catch(err => {
					console.log(err);
					this.setState({sendStatus: 'Opsss, something went wrong!'})
				});	
		}		
	}

	render(){
		return(
			<Layout title='Cage the Elephant - Contact'>    
				<div id="contact" className="container-position">	        
					<div id="wrap">	
						<div id='form_wrap'>
							<div id="form">
								<p>Dear Cage,</p>
								<textarea  
									name="message" 
									placeholder="Your message" 
									id="message"
									value={this.state.message}
									onChange={this.onMessageChange}
									required
								>
								</textarea>
								<p>Best,</p>
		            
								<label htmlFor="name">Name: </label>
								<input 
									type="text" 
									name="name" 
									id="name"
									value={this.state.name}
									onChange={this.onNameChange} 
									required 
								/>

								<label htmlFor="email">Email: </label>
								<input 
									type="email" 
									name="email" 
									id="email" 
									value={this.state.email}
									onChange={this.onEmailChange}
									required 
								/>	            
								<input 
									type="submit" 
									name ="submit" 
									value="Send, we'll contact you soon!" 
									id='btnSubmit'
									onClick={this.onSubmit}
								/>
								<h4 className="sendstatus" style={{fontStyle: 'italic'}}>{this.state.sendStatus}</h4>
							</div>		
						</div>    
					</div>
				</div>
			</Layout>
		);
	}
}

export default Contact;

