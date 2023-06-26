import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
function Linechart({ chartData }: any) {
  return <Line data={chartData} />;
}

export default Linechart;
