import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useContext } from "react";
import { Context } from "../Context";

const Doughtnut = () => {
  const [data] = useContext(Context);
  const plugins = [
    {
      afterDraw: (chart) => {
        let ctx = chart.ctx;
        ctx.save();
        let image = new Image();
        image.src = "/images/aim.png";
        let imageSize = 40;
        ctx.drawImage(
          image,
          chart.width / 2 - imageSize / 2,
          chart.height / 2 - imageSize / 2,
          imageSize,
          imageSize
        );
        ctx.restore();
      },
    },
  ];
  const value = {
    datasets: [
      {
        data: [15 - Number(data.score), Number(data.score)],
        backgroundColor: ["#36A2EB", "#438AF61A"],
      },
    ],
  };
  return (
    <>
      <Doughnut data={value} plugins={plugins} />
    </>
  );
};

export default Doughtnut;
