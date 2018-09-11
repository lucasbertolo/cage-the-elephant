    import React from 'react';
    import './Calendar.css';

    //Subcomponents
    import MapContainer from '../Maps/MapContainer';
    import Concerts from './Concerts'

    //Icons
    import { FaArrowLeft , FaArrowRight} from 'react-icons/fa';

    class Calendar extends React.Component {   	
        constructor(props){
            super(props);
            this.state = {
                counter: 0
            }
        }

        //Arrow functions to change the concert described 
        nextConcert = () => {
            const counter = this.state.counter;
            if(counter < this.props.concerts.length - 1){
                this.setState({counter: counter + 1})            
            } 
        }


        previousConcert = () => {
            const counter = this.state.counter;
            if(counter > 0){
                this.setState({counter: counter - 1})            
            } 
        }


        render(){
            return(
                <div className="container-position" id="calendar">
                    <div id="container-concerts">
                        <div onClick={this.previousConcert}id="left-arrow">
                            <FaArrowLeft />
                        </div>

                        <div id="googleMap">
                            <MapContainer 
                                concerts={this.props.concerts}
                                counter={this.state.counter} 
                            />
                        </div>

                        <Concerts 
                            concerts={this.props.concerts}
                            counter={this.state.counter} 
                        />

                        <div onClick={this.nextConcert}id="right-arrow">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>            
            );
    	}
    } 

    export default Calendar;