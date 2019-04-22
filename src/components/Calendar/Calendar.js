    import React from 'react';
    import './Calendar.css';

    //Subcomponents
    import MapContainer from '../Maps/MapContainer';
    import Concerts from './Concerts'
    import Layout from '../Layout';
    //Icons

    class Calendar extends React.Component {   	
        constructor(props){
            super(props);
            this.state = {
                counter: 0
            }
        }

        componentDidMount(){
            this.props.setSection('Concerts');
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
                <Layout title='Cage the Elephant - Concerts'>    
                <div className="container-position" id="calendar">
                    <div id="container-concerts">
                        <div onClick={this.previousConcert} id="left-arrow">
                            <i className="fa fa-arrow-left"></i>
                        </div>

                        <div id="googleMap" className='shadow'>
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
                            <i className="fa fa-arrow-right icon"></i>
                        </div>
                    </div>
                </div>  
                </Layout>          
            );
    	}
    } 

    export default Calendar;