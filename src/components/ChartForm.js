import React from "react";

class ChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.handleChange(event.target.value);
  };
  render() {
    return (
      <div className="chartForm">
        <div>
          <b>Enter numbers separted by comma(,) to max length 50:</b>{" "}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter input (eg. 2, 3.54)"
          />
        </div>
      </div>
    );
  }
}
export default ChartForm;
