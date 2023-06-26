import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
function Barchart({ chartData }: any) {
  return <Bar data={chartData} />;
}

export default Barchart;
