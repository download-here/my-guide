import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Git from './pages/Git';
import NPM from './pages/NPM';
import CommandPrompt from './pages/CommandPrompt';

const Main = () => {
	return(
		<main>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/git' component={Git}/>
				<Route exact path='/npm' component={NPM}/>
				<Route exact path='/cmd' component={CommandPrompt}/>
			</Switch>
		</main>
	);
}

export default Main;