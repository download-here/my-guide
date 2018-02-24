import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Contact from '../Contact';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
		this.state.title = 'Guides';
	}
	render() {
		return(
			<div id="main">
				<Header title={this.state.title} />
				<Navigation />
				<article>
					<h2>What is this?</h2>
					<p>This page is for introducing how to use resources such git and npm</p>
					<p>All guides will include how to use certain commands with useful examples.</p>
				</article>
				<Contact />
			</div>
		);
	}
}

export default Home;