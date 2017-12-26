import React from 'react';
class ChartForm extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
	}
	handleChange= (event) => {
	    this.setState({value: event.target.value});
	    this.props.handleChange(event.target.value);
	 }
	render() {
		return (
			<div className="chartForm">
				<div><b>Please enter Integer and Floating Numbers upto Length 50:</b> <input type="text" value={this.state.value} onChange={this.handleChange}/></div>
			</div>
		)
	}
}
export default ChartForm;