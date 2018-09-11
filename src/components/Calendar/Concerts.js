import React from 'react';

class Concerts extends React.Component {

	render() {
		const {concerts, counter} = this.props;
		return (
			  <div className="descr-show">
	          	<div className="info-show">
	          		<h3 id="data-show">{concerts[counter].date}</h3>
	          		<h4 id="name-show">{concerts[counter].local}</h4>
	          		<h5 id="local-show">{concerts[counter].address}</h5>
	          	</div>
	          </div>
		);
	}
}

export default Concerts;