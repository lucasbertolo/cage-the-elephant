import React from 'react';
import {Helmet} from "react-helmet";

const Layout = (props) => {
	return(
		<div className='layout'>
			<Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <link rel="canonical" href="https://lucasbertolo.github.io/cage-the-elephant/"/>
            </Helmet>
            {props.children}
         </div>
	)
}

export default Layout;