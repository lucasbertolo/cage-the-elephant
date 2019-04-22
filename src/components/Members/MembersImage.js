import React from 'react';
import './Members.css';


class MembersImage extends React.Component{		

	render(){
		const member = this.props.box;
		
		const square = member.map((item, index) => {
			return(
				<div 
					className='bounding-box' 
					key={index} 
					id={`member-${index}`}
					style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}
					onClick={this.props.handleShow}>
				</div>
			);
		});

		return(
			<div id="members-image" className='shadow'>	
			    	<span>
		            	<img id='inputImage' src={this.props.imageUrl} alt='img'/>
		            	{square}
		            </span>
	        </div>
	    );
	}

}

export default MembersImage;