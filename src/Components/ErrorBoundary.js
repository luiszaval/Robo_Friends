import React, { Component } from 'react';


class ErrorBounday extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}
	}

	componentDidCatch(error,info){
		this.setState({hasError:true})
	}
	render(){
		if(this.state.props){
			return <h1> Ooooops. That was not supposed to happen</h1>
		}
		return this.props.children
	}
}



export default ErrorBounday;