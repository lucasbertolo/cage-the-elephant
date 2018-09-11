import React from 'react';
import Elephant from "./elephant.svg";
import './Header.css';
import {FaFacebookF, FaInstagram, FaPinterestP} from 'react-icons/fa';

const Header = (props) => {
	return(
		<header id="header" className="pa1">
			<div id="social" className="mt4 ma3">
				<FaFacebookF className="ml3 pointer"/>
				<FaInstagram className="ml3 pointer"/>
				<FaPinterestP className="ml3 pointer"/>
			</div>
			<div id="container-logo">
				<img src={Elephant} id="img-logo" alt="logo"/>	
			</div>
			<div id="section-name">		
				<h1 className="mr2">{props.section}</h1>
			</div>
		</header>
	);
}

export default Header;