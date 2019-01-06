/*import React, so I can use JSX and Component, so I can create state.*/
import React, {Component} from 'react';
/*import App.css file*/
import './App.css';
/*import CardList app*/
import CardList from './CardList';
/*import SearchBox app*/
import SearchBox from './SearchBox'
/*import the Scroll app*/
import Scroll from './Scroll';
/*create App class to extend Component class*/
	/*Component requires render for what we're going to return*/
	/*use constructor and super to create state*/
	/*Use a Render Lifecycle method called componentDidMount() to alow the original rendering, then use an api to get mock users and return those to change the state of robots.
	/*add an event handler - onSearchChange*/
		/*have to make it an arrow function to appropriately handles 'this'*/
		/*action is this.setState({searchfield:event.target.value});*/

/*For render*/
	/*create a function called filteredRobots that filters this.state.robots
	taking robot as a parameter,and returing an array of robots that only includes those whose names
	contain what is in the searchfield - return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());*/
	/*Create an if statement to return a "Loading" message (
		if (this.state.robots.length === 0){return<h1>Loading</h1>} if robots is empty, else ... return (see below)*/
	/*return*/
		/*title - use className tachyons in div to center title*/
		/*add title*/
		/* SearchBox app*/
			/*For Search Box app, add searchChange prop - this.onSearchChange
			to be passed as an event handler prop in SearchBox*/
		/*add Card List app*/
			/*For Card List app, add a robots prop
			that passes the filteredRobots function*/
		/*wrap the Card List app in the Scroll app to allow scrolling of the robot list*/

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield: ''
			}
		}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>this.setState({robots:users}));
	}
	

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		}
		else {
			return(
				<div className='tc'>
					<h1 className='f1'>{`Tom's Robots`}</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				)
			}
		}
}

/*export App for use index.js*/
export default App;
