import React from "react"
import "./index.css";
class Like extends React.Component {
	constructor (props) {
		super (props)
		// create a state with a property count set to 0
		this.state = {
		count : 0
		}
		// bind the method to the class component 
		this.go = this.go.bind(this)
	}

	// event handler function 
	go () {
		// set the new state by getting previous state 
		// using (prevState) and increase by 1 
		this.setState (  prevState => {
			return {
				count : prevState.count + 1
			}
		})
	} 

	render() {
		return (
			<div> 
				
 {this.state.count}  <button className="button1" onClick= {this.go} > like! </button> 
 &nbsp;<button className="button1">Share</button>
 &nbsp;<button className="button1">Comment</button>
			</div>
		)
	}
}
export default Like