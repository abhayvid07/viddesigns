import React, { Component } from 'react';


class Posts extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				{this.props.posts.map((value,index) => {<PostsBlock key = {index} data = {value} />})}
			</div>
		);
	}
}

class PostsBlock extends Component {
	render() {
		return(
			<div className = 'postsdiv'>
				<div className = 'postsheader'>
				
				</div>
				<div className = 'postsbody'>
				
				</div>
				<div className = 'postsfooter'>
					<div className = 'postsreaction'>
					
					</div>
					<div className = 'postscomments'>
				
					</div>
				</div>
			</div>
		)
	}
}


export default Posts;
