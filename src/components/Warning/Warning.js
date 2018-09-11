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
              <p>This website is just for practicing purposes! 
                <br />I've got some components to help me creating it, but in general 
              I've made it all from scratch</p>
              <p className="close-thik" onClick={this.updateReminderStatus}></p>
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

