import React from 'react';
import './Members.css';
import ModalMember from '../Modals/ModalMember';
import MembersImage from './MembersImage';

class Members extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
          id: 0,
          box: [],
          imageUrl: 'https://al8cddccn.cloudimg.io/width/615/webp-lossy-70.png-lossy-70/i.imgur.com/uldYNeq.png',
        };
    }

    //MODAL FUNCTIONS - SHOW AND HIDE
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

  
    //FETCHING THE CLARIFAI API - TO RECOGNIZE THE GUYS'FACES 
    componentDidMount(){
      fetch('https://secure-waters-51389.herokuapp.com/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
             input: this.state.imageUrl
            })
      })
      .then(response => response.json())
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

   calculateFaceLocation = (data) => {

     const image = document.querySelector('#inputImage');
     const width = Number(image.width);
     const height = Number(image.height);

     const clar = data.outputs[0].data.regions;
     const faces = clar.map((face)=>{
        return face.region_info.bounding_box
     })

     const members = faces.map((member) => {
        return  {
                leftCol: member.left_col * width,
                topRow:  member.top_row * height,
                rightCol: width - (member.right_col * width),
                bottomRow: height - (member.bottom_row * height)
              }
     })

     return members;
  }

   displayFaceBox = (box) => {
    this.setState({box: box});
  }

    render(){
        const {box, imageUrl} = this.state;
    
        return(           
          <div className='content-members container-position' id= "members">
            <MembersImage box={box}
                          imageUrl={imageUrl} 
                          handleShow={this.handleShow}/>
        
            <ModalMember  show={this.state.show}
                          onHide={this.handleHide}
                          members={this.props.members}  
                          id={this.state.id}                      
           />
          </div>
        );
    }
}

export default Members;

