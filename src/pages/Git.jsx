import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Contact from '../Contact';
import gitInfo from '../gitInfo.json';

class Git extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
		this.state.title = gitInfo['header'];
		this.state.gitInfo = gitInfo['commands'];
		this.state.commandRegEx = /\<command\>/g;
	}

	replaceContent(str,rb,regEx) {
		const words = str.split(" ");
		var sentence = words.map((word) =>
			word.match(regEx) ? <span><code>{ rb }</code> </span> : `${word} `
		);
		return(sentence);
	}

	mainContent() {
		const data = this.state.gitInfo;
		return(
			<div>
				<article>
					<h2>What is Git!</h2>
					<p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
					<p>Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.</p>
				</article>
				<section>
					{
						data.map((d) => 
							<div className="example">
								<h3>{ d.commandDisplay }</h3>
								{
									d.description.map((desc) => <p>{ this.replaceContent(desc,d.command,this.state.commandRegEx) }</p> )
								}
								{
									d.important ? d.important.map((imp) => <p><span className="important">{ imp }</span></p>) : ''
								}
								{
									d.options ? d.options.map((option) =>
										<div className="flags">
											<h4>Options</h4>
											<div className="flag">
												<h5><span className="gitoptions">{ option.flag }</span></h5>
												{
													option.description.map((desc) => <p>{ this.replaceContent(desc,option.command,this.state.commandRegEx) }</p>)
												}
											</div>
										</div>
									) : ''
								}
							</div>
						)
					}
				</section>
			</div>
		);
	}
	render() {
		return(
			<div id="main">
				<Header title={ this.state.title } />
				<Navigation />
				{ this.mainContent() }
				<Contact />
			</div>
		);
	}
}

export default Git;