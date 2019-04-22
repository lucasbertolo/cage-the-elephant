import React from 'react';
import './About.css';
import Layout from '../Layout';

class About extends React.Component {

    componentDidMount(){
        this.props.setSection('About')
    }
    render(){
    	return (
            <Layout title='Cage the Elephant - About'>    
        		<div className="container-position" id="about">
            		<article data-name="article-full-bleed-background" className="shadow article-about">
                        <div className="cf" id="container-article">
                                <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times" id="article">
                                    <header className="bb b--black-70 pv4">
                                        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Cage the Elephant</h3>
                                        <h4 className="f3 fw4 i lh-title mt0">Our history</h4>
                                    </header>
                                    <section className="pt5 pb4">
                                        <p className="times lh-copy measure f4 mt0">
                                            Cage the Elephant is an American rock band from Bowling Green, Kentucky, that formed 
                                            in 2006 and moved to London, England before their first album was released in 2008. 
                                            The group currently consists of vocalist Matthew Shultz, 
                                            rhythm guitarist Brad Shultz, drummer Jared Champion and bassist 
                                            Daniel Tichenor, as well as touring keyboardist/guitarist Matthan Minster and 
                                            touring lead guitarist Nick Bockrath. Lincoln Parish served as the band's 
                                            lead guitarist from their formation in 2006 until December 2013, when he 
                                            left on good terms to pursue a career in producing. 
                                            The band's first album, Cage the Elephant, was released in 2008 
                                            to much success, spawning several successful radio singles and gained the band a 
                                            large following in both the United States and the United Kingdom.
                                            Cage the Elephant are known for their energetic live performances and eclectic sound[according 
                                            to whom?]. The band's first album is influenced by classic rock, funk, and blues music.
                                             However, the band's second album, Thank You, Happy Birthday, displayed heavy 
                                             influence by punk rock as well as bands such as Pixies and Nirvana, while Melophobia 
                                             was a concerted effort by the band to find its own distinct musical identity, and 
                                             earned them a Grammy Award nomination in 2015 for Best Alternative Music Album. 
                                             Cage the Elephant's fourth album, Tell Me I'm Pretty, produced by Dan Auerbach, 
                                             was released on December 18, 2015. The album won the award for Best Rock Album at 
                                             the 59th Annual Grammy Awards. The band's newest release, Unpeeled, is a live 
                                             album that was released on July 28, 2017.
                                        </p>                           
                                     </section>
                                </div>
                        </div>
                    </article>
         		</div>
            </Layout>
        
	    )
    }
}

export default About;