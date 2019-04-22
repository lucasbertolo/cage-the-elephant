import React from 'react';
import Elephant from "./elephant.svg";
import './Header.css';

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			menu: true,
			icon: 'bars'
		}
	}
	handleMenu = () => {
		const header = document.querySelector('#mobile');
		this.setState({
			menu: !this.state.menu
		})

		if(this.state.menu){
			header.style.display = 'block'
			this.setState({
				icon: 'close'
			})
		} else {
			header.style.display = 'none'
			this.setState({
				icon: 'bars'
			})
		}
	}

	render(){
		return(
			<header>
				<div id='header'>
					<div id="social">
						<i className="fa fa-pinterest nav social-icon"></i>
						<i className="fa fa-facebook nav social-icon"></i>
						<i className="fa fa-instagram nav social-icon"></i>
					</div>			
					<div id="section-name">	
						<div id='menu'>
							<i onClick={this.handleMenu} className={`fa fa-${this.state.icon}`}></i>
						</div>					
						<h1>{this.props.section}</h1>
					</div>
					<div id="container-logo">
						<img src={Elephant} id="img-logo" alt="logo"/>	
					</div>	
				</div>	
				<div id='mobile'>
					<section><a href={process.env.PUBLIC_URL + "/"}>Home</a></section>
					<section><a href='about'>About</a></section>
					<section><a href='members'>Members</a></section>
					<section><a href='discography'>Discography</a></section>
					<section><a href='calendar'>Concerts</a></section>
					<section><a href='contact'>Contact</a></section>
				</div>	
			</header>
		);		
	}
}

export default Header;