import React from 'react';
import ChartBox from './ChartBox';
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = this.props.dataList;
    this.errorMessage = this.props.errorState;
    this.formatData();
  };

  //updating here the newprops 
  componentWillReceiveProps(nextProps) {
      this.chartData = nextProps.dataList;
      this.errorMessage = nextProps.errorState;
      this.formatData();
  };

  //update the chartData and adding width property 
  formatData(){
    this.percentages = this.getPercentages(this.chartData);
    for(let i=0; i<this.chartData.length; i++)  {
      this.chartData[i].width = `${parseFloat(this.percentages[i]*100)}%`;
    }
  };
  
  //get the percentage value of each from the sum
  getPercentages(data){
      let sum = this.getSum(data);
      return data.map(function (item) {
          return parseFloat(item.value / sum);
      });
  };

  //Will Return the sum of the user typed value
  getSum(data) {
      return data.reduce(function (sum, item) {
          return sum + item.value;
      }, 0);
  };

  render() {
    //if errorMessage then return with error view
    if(this.errorMessage){
      return <div className="error">Please enter the valid inputs</div>
    }
    return (
      <div className="chart"> 
        <ChartBox box={this.chartData} />
      </div>     
    );
  }
}
export default Chart;