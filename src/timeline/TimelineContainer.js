import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { IconButton, Tooltip } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CodeIcon from "@material-ui/icons/Code";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import WorkIcon from "@material-ui/icons/Work";
import BeeLogo from "../assets/beelogo.png";

function TimelineContainer(props) {
  const [isVisible, setVisible] = useState(true);
  const containerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(containerRef.current);
    return () => observer.unobserve(containerRef.current);
  });

  const printProp = () => {
    console.log(props.left);
    console.log(props.link);
    console.log(isVisible);
  };

  const toggleTag = (tag) => {
    console.log("Tag");
    console.log(tag);
  };

  return (
    <React.Fragment>
      <div
        className={
          `timelineContainer ${isVisible ? "visible" : ""}` +
          (props.left ? " left" : " right")
        }
        ref={containerRef}
      >
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
              <IconButton color="inherit" onClick={() => printProp}>
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
          <div
            style={
              props.tag.includes("projects")
                ? { width: "10%", marginTop: "2%" }
                : { display: "none" }
            }
          >
            <Tooltip title="Projects">
              <IconButton
                color="inherit"
                onClick={() => props.toggleTag("projects")}
              >
                <DeveloperBoardIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div
            style={
              props.tag.includes("work")
                ? { width: "10%", marginTop: "2%" }
                : { display: "none" }
            }
          >
            <Tooltip title="Work">
              <IconButton
                color="inherit"
                onClick={() => props.toggleTag("work")}
              >
                <WorkIcon />
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img
            src={BeeLogo}
            alt="beelogo"
            style={{ width: "34%", borderRadius: "3%" }}
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default TimelineContainer;
