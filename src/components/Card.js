/*import React, so I can use JSX*/
import React from 'react';
/*import Card.css file*/
import './Card.css';
/*create Card app*/
	/*Use id, name, username, and email properties - created one level above for parameters
	- that come from a data file called robots.js - imported in parent app*/
	/*Use tachyons for format the top level div*/
	/*Render an image pulled from a website and randomized via the username property*/
	/*Render the name and email properties*/
const Card = ({id, name, username, email}) => {
	return(
	<div className='tc bg-light-green dib br3 pa3 na2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${username}`}height='200' width='200' />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
	)

}

//export the Card for use elsewhere
export default Card;
