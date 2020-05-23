import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) =>{
	return(
			<div>
			{
				robots.map((user, i, x) =>{
					console.log('the robot.map props are:', 'user:', user,'secondProp', i ,'thirdProp', x )
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
							/>
					);
				})
			}
	    </div>	
	);
};


export default CardList;