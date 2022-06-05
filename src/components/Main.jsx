import Doughtnut from "./Doughnut";
import Graph from "./Graph";
import Syllabus from "./Syllabus";
import { useContext } from "react";
import { Context } from "../Context";

const Main = () => {
  const [data, setData] = useContext(Context);
  const handleClick = () => {
    setData({ ...data, overlay: 1 });
  };
  return (
    <>
      <div className="Skill_container">
        <div className="Skill_container_left">
          <div className="Skill_container_left_inner">
            <div className="Skill_container_left_inner_card">
              <div className="div_flex_spacebetween">
                <div>
                  <div className="div_flex_spacebetween">
                    <div>
                      <img
                        src="/images/html5.png"
                        alt="html5"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                      <b>Hypertext Markup Language</b>
                      <br />
                      <span
                        className="light_font_color"
                        style={{ fontSize: "12px" }}
                      >
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June
                        2021
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="Skill_container_left_button"
                    onClick={handleClick}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="Skill_container_left_inner_card">
              Quick Statistics
              <div className="div_flex_spacebetween">
                <div className="div_flex">
                  <div className="image_adjust">
                    <img
                      src="/images/trophy.png"
                      alt="trophy"
                      className="height_image"
                    />
                  </div>
                  <div className="margin_left_fifteen">
                    <h3>{data.rank}</h3>
                    <h6>YOUR RANK</h6>
                  </div>
                </div>
                <div className="div_flex">
                  <div className="image_adjust">
                    <img
                      src="/images/calendar.png"
                      alt="calendar"
                      className="height_image"
                    />
                  </div>
                  <div className="margin_left_fifteen">
                    <h3>{data.percentile}%</h3>
                    <h6>PERCENTILE</h6>
                  </div>
                </div>
                <div className="div_flex">
                  <div className="image_adjust">
                    <img
                      src="/images/correct.png"
                      alt="correct"
                      className="height_image"
                    />
                  </div>
                  <div className="margin_left_fifteen">
                    <h3>
                      {Number(data.score) === 0 || Number(data.score) > 9
                        ? data.score
                        : `0${data.score}`}
                      /15
                    </h3>
                    <h6>CORRECT ANSWERS</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="Skill_container_left_inner_card">
              <div className="div_flex_spacebetween">
                <div style={{ maxWidth: "400px" }}>
                  <h4>Comparison Graph</h4>
                  <br />
                  <div className="light_font_color">
                    <b>You scored {data.percentile}% percentile</b> which is
                    {data.percentile <= 72 ? " lower" : " higher"} than the
                    average percentile 72% of all the engineers who took this
                    assessment
                  </div>
                </div>
                <div>
                  <div className="graph_image_adjust">
                    <img
                      src="/images/graph.png"
                      alt="graph"
                      className="height_image"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Graph />
              </div>
            </div>
          </div>
        </div>
        <div className="Skill_container_right">
          <div className="Skill_container_left_inner">
            <div className="Skill_container_right_inner_card">
              <Syllabus />
            </div>
            <div className="Skill_container_right_inner_card">
              <div className="div_flex_spacebetween">
                <div>
                  <h4>Question Analysis</h4>
                </div>
                <div style={{ color: "#438AF6" }}>
                  <h4>
                    {Number(data.score) === 0 || Number(data.score) > 9
                      ? data.score
                      : `0${data.score}`}
                    /15
                  </h4>
                </div>
              </div>
              <div className="light_font_color">
                <b>You scored {data.score} question correct out of 15.</b>{" "}
                {data.score < 15
                  ? "However it still needs some improvements"
                  : "Good Work"}
              </div>
              <Doughtnut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
