/*import React to use JSX*/
import React from 'react';

/*create Search Box*/
	/*takes two props - searchfield and searchChange*/
	/*use <input />*/
		//top level div tachyon of pa2
		/*search type, plaeholder text, className with tachyons,
		and onChange to hold the event listener created and passed from App*/

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input 
			className= 'pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='enter text here'
			onChange={searchChange}
		/>
		</div>
		)
}
		
/*export Search Box*/
export default SearchBox;
