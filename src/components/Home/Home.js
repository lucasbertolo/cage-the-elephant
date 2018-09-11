    import React from 'react';
    import './Home.css';
    import Warning from '../Warning/Warning';

    class Home extends React.Component {

        constructor(props){
            super();
            this.state = {
              reminder: true
            }
        }

         handleReminder = () => {
            return this.setState({reminder: false})
        }

        render(){
            return(
                <div>
                    <Warning handleReminder={this.handleReminder}
                           reminder={this.state.reminder}/> 
                    <div id="home" className="container-position">
                        <div className="moon"></div>
                        <div className="title">
                            <h1 id="logo">Cage</h1>
                        </div>
                    </div>
                </div>
            )
        }
    } 

    export default Home;