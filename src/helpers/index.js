//Chart helper functions

//Will Return the sum of the user typed value
const getSum = data => {
  return data.reduce(function(sum, item) {
    return sum + item.value;
  }, 0);
};

//get the percentage value of each from the sum
const getPercentages = data => {
  let sum = getSum(data);
  return data.map(function(item) {
    return parseFloat(item.value / sum);
  });
};

//update the chartData and adding width property
export const formatData = chartData => {
  let percentages = getPercentages(chartData);
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].width = `${parseFloat(percentages[i] * 100)}%`;
  }
};
