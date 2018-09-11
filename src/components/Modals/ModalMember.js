import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import './ModalMember.css';
 
class ModalMember extends React.Component { 

  render() {
    const {members, show, onHide, id} = this.props;
    return (
      <div>
        <Modal          
          show={show}
          onHide={onHide}>

          <Modal.Header className="modal-edge">
            <Modal.Title id="contained-modal-title-lg">
              {members[id].name}              
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-body">
            <p>
              {members[id].bio}        
            </p>
          </Modal.Body>

          <Modal.Footer className="modal-edge">
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
          
        </Modal>
      </div>
    );
  }
}


export default ModalMember;