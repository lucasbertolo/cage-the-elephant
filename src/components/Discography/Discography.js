import React from 'react';
import ModalDisco from '../Modals/ModalDisco';
import './Discography.css';
import Layout from '../Layout';

class Discography extends React.Component{
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	      show: false,
	      id: 0
	    };
	}
	componentDidMount(){
		this.props.setSection('Discography');
	}
	
  	handleShow = (event) => {
  		const id = Number(event.target.id.slice(-1));
    	return this.setState({ 
            show: true,
            id: id
         });  
  	}

  	handleHide = () => {
    	return this.setState({ show: false });
  	}
	render(){
		const sources = this.props.sources;

		const listSources = sources.map((item) =>
			<figure key={item.id}
					onClick={this.handleShow}
					>
				<img 					
					src={item.source}
					alt="disco" 
					className="disco-img" 
					id={item.id}					
				/>
			</figure>
		);
		return(
			<Layout title='Cage the Elephant - Discography'>    
				<div className="container-position" id="disco">
			    		<ModalDisco 
							show={this.state.show}
			            	onHide={this.handleHide}
			            	disco={sources}
			            	id={this.state.id} 
	         			 /> 
	         			<div className='wrapper-disco'>       	
				        	<div className="bg-carousel">
					        	<div id="carousel">
									{listSources}							
					        	</div>	   
				 			</div>
			 			</div>
			    </div>
			</Layout>
		);
	}
}

export default Discography;