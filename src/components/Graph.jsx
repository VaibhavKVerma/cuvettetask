import { Line } from "react-chartjs-2";

const Graph = () => {
  const data = {
    labels: [0, 20, 40, 60, 80, 100],
    datasets: [
      {
        data: [65, 59, 70, 76, 66, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default Graph;
