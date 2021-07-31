import React from "react";
import "../App.css";
import { IconButton, Tooltip } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CodeIcon from "@material-ui/icons/Code";
function TimelineContainer(props) {
  const printProp = () => {
    console.log(props.left);
    console.log(props.link);
  };

  const toggleTag = (tag) => {
    console.log("Tag");
    console.log(tag);
  };

  return (
    <React.Fragment>
      <div className={"timelineContainer " + (props.left ? "left" : "right")}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h2>{props.headline}</h2>
          <div
            style={
              props.tag.includes("algorithms")
                ? { width: "10%", marginTop: "2%" }
                : { display: "none" }
            }
          >
            <Tooltip title="Algorithm">
              <IconButton
                color="inherit"
                onClick={() => props.toggleTag("algorithms")}
              >
                <AccountTreeIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div
            style={
              props.tag.includes("coding")
                ? { width: "10%", marginTop: "2%" }
                : { display: "none" }
            }
          >
            <Tooltip title="Coding">
              <IconButton
                color="inherit"
                onClick={() => props.toggleTag("coding")}
              >
                <CodeIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <p style={{ marginTop: "-1%" }}>
          {props.content}{" "}
          <a href={props.link} style={{ textDecoration: "none" }}>
            {props.linkName}
          </a>{" "}
        </p>
      </div>
    </React.Fragment>
  );
}

export default TimelineContainer;
