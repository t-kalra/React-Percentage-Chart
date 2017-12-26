import React from 'react';
import ChartComponent from './Chart';
import ChartForm from './ChartForm';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    props = {
      dataList: [
        {  value: 60 },
        {  value: 20 },
        {  value: 15 },
        {  value: 5 }
      ]
    };
    this.state = {
      dataList: props.dataList,
      errorMessage: false
    };
  };

  updateDataListState = (selections) => {
    let validList = this.getValidNumberList(selections);
    if(validList.length > 0 && validList.length <= 50){
      this.setState({dataList: validList});
      this.setState({errorMessage: false});
    } else{
      this.setState({dataList: []})
      this.setState({errorMessage: true});
    }
  };

  getValidNumberList = (selections) => {
    let selectionsList = selections.split(',');
    let filteredValue = [];
    selectionsList.length > 0 && selectionsList.forEach((selection) => {
      let matches = selection.match(/\d+(?:\.\d+)?/);
      if(matches){
        filteredValue.push({value: parseFloat(matches[0])});
      }      
    })
    return filteredValue;
  };

  render() {
    return (
      <div className="container">
        <h1>ReactJS Percentage Chart</h1>
        <ChartForm handleChange={this.updateDataListState} />
        <ChartComponent errorState={this.state.errorMessage} dataList={this.state.dataList} />
      </div>        
    );
  }
}

export default App;
