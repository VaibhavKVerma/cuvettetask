import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { useContext } from "react";
import { Context } from "../Context";

const Graph = () => {
  const [data] = useContext(Context);

  const Data = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100"],
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
      annotation: {
        annotations: {
          box1: {
            type: "box",
            xMin: Math.max(0, (data.percentile / 100) * 5 - 0.5),
            xMax: Math.min(5, (data.percentile / 100) * 5 + 0.5),
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(99, 211, 255, 0.25)",
            borderWidth: 0,
          },
          line1: {
            type: "line",
            xMax: (data.percentile / 100) * 5,
            xMin: (data.percentile / 100) * 5,
            borderColor: "#438af6 ",
            borderWidth: 2,
            borderDash: [6, 4],
          },
          line2: {
            type: "line",
            xMax: (72 / 100) * 5,
            xMin: (72 / 100) * 5,
            borderColor: "#ff9142  ",
            borderWidth: 2,
            borderDash: [6, 4],
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: { ticks: { display: false }, grid: { color: "white" } },
      x: { grid: { color: "white" } },
    },
  };

  return (
    <>
      <Line data={Data} options={options} plugins={[annotationPlugin]} />
    </>
  );
};

export default Graph;
