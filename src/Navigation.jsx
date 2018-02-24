import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
	}
	render() {
		return (
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/git'}>Git</Link>
				<Link to={'/npm'}>NPM</Link>
				<Link to={'/cmd'}>Command Prompt</Link>
			</nav>
		);
	}
}

export default Navigation;