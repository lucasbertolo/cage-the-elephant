import React from 'react';
import './Warning.css'

class Warning extends React.Component {
  //Showing and hiding the warning content
  updateReminderStatus = () => {  
    this.props.handleReminder();
  }

  render(){

    return this.props.reminder ? (
        <div className="container-warning">
            <div className="thought"> 
              <p>{this.props.message}</p>
              <i className="close-thik" onClick={this.updateReminderStatus}></i>
            </div> 
            <div className="field">
              <div className="ghost">
                <div className="head">
                  <div className="eyeBack">
                    <div className="eye"></div>
                  </div>
                  <div className="eyeBack">
                    <div className="eye"></div>
                  </div>
                </div>
                <div className="legs"></div>    
                <div className="legs"></div>    
              </div>
            </div>
          </div>
    ) 
    : null
  }

}

export default Warning;

