import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
function Piechart({ chartData }: any) {
  return <Pie data={chartData} />;
}

export default Piechart;
