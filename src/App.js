import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {

	constructor(){
		super();
		this.state = {
			robots : [],
			searchField: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').
		then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({ robots:robots });
		});		
	}

	onSearchChange =(event) => {
		this.setState({searchField: event.target.value});
		/*const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		console.log(filteredRobots);*/
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		console.log(filteredRobots);
		return (
				<div className='tc'>					
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<br/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>

				</div>
		);
	}
}

export default App;