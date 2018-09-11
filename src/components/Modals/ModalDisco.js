import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import './ModalDisco.css';
import {FaDownload} from 'react-icons/fa';
 
class ModalDisco extends React.Component { 

  render() {
    const {show, onHide, disco, id} = this.props;
    
    const listMusics = disco[id].music.sounds.map((music, index) => {
     return ( 
       <tbody key={index} id="list-sounds">
        <tr id="modal-sounds">           
          <td>{music}</td>  
          <td><FaDownload/></td>         
        </tr>
        </tbody>
      );
    });  
  
    return (
      <div>
        <Modal          
          show={show}
          onHide={onHide}>

          <Modal.Header closeButton className="modal-edge">
            <Modal.Title id="contained-modal-title-lg">
              {disco[id].music.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-body">
            <table> 
              {listMusics}
            </table>
          </Modal.Body>

          <Modal.Footer className="modal-edge">
            <Button bsStyle="danger">Buy it</Button>
            <Button bsStyle="danger" onClick={onHide} style={{float: 'left'}}>Close</Button>
          </Modal.Footer>
          
        </Modal>
      </div>
    );
  }
}

export default ModalDisco;