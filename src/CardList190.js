/*import React so I can use JSX*/
import React from 'react';
/*import Card app, so I can pass properties to it*/
import Card from './Card';
/*create CardList function*/
/*takes robots as a parameter
uses map (user,i) to loop through the robots array
and create an array that returns Card with key, name, 
username, and email props based on robots[i]*/
const CardList = ({robots}) => {
	return (
			<div>
			{
			robots.map((user, i)=>{	
				return (
						<Card 
							key={robots[i].id}
							name={robots[i].name}
							username={robots[i].username}
							email={robots[i].email}
							/>
					)
				})
			}
			</div>
		)
	}

//export CardList for use higher up
export default CardList;


