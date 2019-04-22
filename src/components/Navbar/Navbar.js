import React from 'react';
import './Navbar.css';
import ReactTooltip from 'react-tooltip'


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
class Navbar extends React.Component{

	render(){
		return(		
			<div>
				<div id="content-navbar">												
						<section>
							<a href={process.env.PUBLIC_URL + "/"} aria-label="Home">
								<i data-tip="Home" className="fa fa-home nav"></i>
							</a>
						</section>
						<section>
							<a href="about" aria-label="About">
								<i data-tip="About" className="fa fa-book nav"></i>
							</a>
						</section>
						<section>
							<a href="members" aria-label="Members">
								<i data-tip="Members" className="fa fa-user nav"></i>
							</a>
						</section>
						<section>
							<a href="discography" aria-label="Disco">
								<i data-tip="Discography" className="fa fa-music nav"></i>
							</a>
						</section>
						<section>
							<a href="calendar" aria-label="Concerts">
								<i data-tip="Concerts" className="fa fa-calendar nav"></i>
							</a>
						</section>
						<section>
							<a href="contact" aria-label="Contact">
								<i data-tip="Contact" className="fa fa-envelope-open nav"></i>
							</a>
						</section>

					    <ReactTooltip place="right" type="error" effect="solid" disable={isMobile}/>
				</div>
			</div>
		);



	}
}


export default Navbar;