/*import React to use JSX*/
import React from 'react';

/*create Scroll component*/
/*pass props, so we can eventually use props.children - which all props objects have*/
/*return as follows:*/
	/*wrap props.children in a div*>
	/*in top div, define a style = {{overflowY:'scroll', border:'1px solid black', height: '800px'}} that establishes a scroll area*/
const Scroll = (props) => {
	return(
		<div style={{overflowY:'scroll', border:'1px solid black', height: '800px'}}>
			{props.children}
		</div>
		);
	};

/*export Scroll*/
export default Scroll;