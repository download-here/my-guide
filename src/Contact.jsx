import React from 'react';
import contact from './contactInfo.json';


class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
		this.state.summary = contact['summary'];
		this.state.details = contact['details'];
		console.log(this.state.details);
	}
	render() {
		return(
			<footer>
				<details>
					<summary>{ this.state.summary }</summary>
					{
						this.state.details.map((d) => 
							<p><span className="info-label">{ d.info }</span> { d.content }</p>
						)
					}
				</details>
			</footer>
		);
	}
}

export default Contact;