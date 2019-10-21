import React from "react";
import ChartBox from "./ChartBox";
import { formatData } from "../helpers/index";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = this.props.dataList;
    this.errorMessage = this.props.errorState;
    formatData(this.chartData);
  }

  //updating here the newprops
  componentWillReceiveProps(nextProps) {
    this.chartData = nextProps.dataList;
    this.errorMessage = nextProps.errorState;
    formatData(this.chartData);
  }

  render() {
    //if errorMessage then return with error view
    if (this.errorMessage) {
      return <div className="error">Please enter the valid inputs</div>;
    }
    return (
      <div className="chart">
        <ChartBox box={this.chartData} />
      </div>
    );
  }
}
export default Chart;
