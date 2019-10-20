import React, { PropTypes } from "react";

const ChartBox = ({ box }) => {
  return (
    <div className="item-wrapper">
      <div className="chartInfo">
        <div>
          <b>Data object for the displayed percentage bar:</b>
        </div>
        <code>{JSON.stringify(box)}</code>
      </div>
      {box.map((obj, index) => {
        return (
          <div
            key={index}
            className={`chartBox boxStyle--${index}`}
            style={{ width: obj.width }}
          >
            <span>{obj.value}</span>
          </div>
        );
      })}
    </div>
  );
};
export default ChartBox;

ChartBox.propTypes = {
  box: PropTypes.array
};

ChartBox.defaultProps = {
  box: {}
};
