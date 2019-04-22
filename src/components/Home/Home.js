    import React from 'react';
    import './Home.css';
    import Warning from '../Warning/Warning';
    import Layout from '../Layout';

    const message = 'Only for practice purposes';

    class Home extends React.Component {

        constructor(props){
            super();
            this.state = {
              reminder: true
            }
        }

        componentDidMount(){
            this.props.setSection('Home');
        }

         handleReminder = () => {
            return this.setState({reminder: false})
        }

        render(){
            return(
                <Layout title='Cage the Elephant - Home' section='Home'>
                    <div className='container-position'>
                        <Warning handleReminder={this.handleReminder}
                               reminder={this.state.reminder}
                               message={message}/> 
                        <div id="home" className="wrapper-logo">
                            <div className="moon"></div>
                            <div className="title">
                                <h1 id="logo">Cage</h1>
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }
    } 

    export default Home;