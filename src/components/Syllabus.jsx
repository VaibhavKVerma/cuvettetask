const Syllabus = () => {
  const subject = [
    "HTML Tools,Forms,History",
    "Tags & References in HTML",
    "Tables & CSS Basics",
    "Tables & CSS Basics",
  ];
  const data = [80, 60, 24, 96];
  const color = ["blue", "orange", "red", "green"];

  const list = data.map((ele, idx) => {
    return (
      <div key={idx}>
        {subject[idx]}
        <div className="div_flex_spacebetween">
          <div>
            <div
              className={`horizontal_bar horizontal_bar_behind background_light_${color[idx]}`}
            ></div>
            <div
              style={{ width: `${(ele * 200) / 100}px` }}
              className={`horizontal_bar horizontal_bar_front background_dark_${color[idx]}`}
            ></div>
          </div>
          <div className={`font_dark_${color[idx]}`}>{ele}%</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h4>Syllabus Wise Analysis</h4>
      {list}
    </>
  );
};

export default Syllabus;
