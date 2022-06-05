import { useContext, useState } from "react";
import { Context } from "../Context";

const Overlay = () => {
  const [data, setData] = useContext(Context);
  const [fakedata, setFakedata] = useState({
    rank: "0",
    percentile: "0",
    score: "0",
  });

  const update = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFakedata({ ...fakedata, [name]: val });
  };

  const handleSubmit = () => {
    setData({ ...data, ...fakedata, overlay: 0 });
  };

  const handleCancel = () => {
    setData({ ...data, overlay: 0 });
  };
  return (
    <>
      <div
        className="overlay"
        style={{ display: data.overlay === 0 ? "none" : "block" }}
      >
        <div className="modal">
          <div className="Skill_container">
            <div className="Skill_container_left">
              <div className="Skill_container_left_inner">
                <div className="">
                  <div className="div_flex_spacebetween">
                    <div>
                      <div className="div_flex_spacebetween">
                        <div>
                          <h2>Update Scores</h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/html5.png"
                        alt="html5"
                        style={{ height: "40px" }}
                      />
                    </div>
                  </div>
                  <div style={{ height: "0.5px", background: "#EBF0F5" }}></div>
                  <div>
                    <div className="div_flex_spacebetween margin">
                      <div style={{ display: "flex" }}>
                        <div className="overlay_dots">1</div>
                        <div>Update your rank</div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="jFbavL"
                          name="rank"
                          value={fakedata.rank}
                          onChange={update}
                        />
                      </div>
                    </div>
                    <div className="div_flex_spacebetween margin">
                      <div style={{ display: "flex" }}>
                        <div className="overlay_dots">2</div>
                        <div>Update your percentile</div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="jFbavL"
                          name="percentile"
                          value={fakedata.percentile}
                          onChange={update}
                        />
                      </div>
                    </div>
                    <div className="div_flex_spacebetween margin">
                      <div style={{ display: "flex" }}>
                        <div className="overlay_dots">3</div>
                        <div>Update your current score{"(out of 15)"}</div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="jFbavL"
                          name="score"
                          value={fakedata.score}
                          onChange={update}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0.5px", background: "#EBF0F5" }}></div>
                  <div>
                    <button
                      type="button"
                      className="Button_button__2Lf63 "
                      style={{ float: "right" }}
                      name="overlay"
                      value={data.overlay}
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                    <button
                      style={{ float: "right" }}
                      className="sc-cBNeex jFbavL"
                      name="overlay"
                      value={data.overlay}
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
