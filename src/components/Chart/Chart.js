import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataInfoValue = props.dataInfo.map((dataItem) => dataItem.value);
  const totalMaximum = Math.max(...dataInfoValue);
  return (
    <div className="chart">
      {props.dataInfo.map((dataItem) => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          maxValue={totalMaximum}
          label={dataItem.label}
        />
      ))}
    </div>
  );
};

export default Chart;
