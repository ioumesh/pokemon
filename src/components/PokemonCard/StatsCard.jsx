import React from "react";
import "./stats.css";
import ProgressBar from "@ramonak/react-progress-bar";
const StatsCard = ({ stats }) => {
  return (
    <div className="statsContainer">
      <div>
        {stats.map((item, index) => {
          return (
            <div className="statsWrapper">
              <span className="name">{item.stat.name}</span>

              <ProgressBar
                completed={`${item.base_stat}`}
                bgColor={"#e44219"}
                baseBgColor={"#F09A92"}
                borderRadius="0"
                height="10px"
                labelAlignment="outside"
                transitionDuration="1s"
                transitionTimingFunction="ease-in-out"
                animateOnRender="true"
                labelClassName="label"
                className="wrapper"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
