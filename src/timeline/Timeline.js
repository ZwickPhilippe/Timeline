import React from "react";
import "../App.css";
import TimelineContainer from "./TimelineContainer";
import CodeIcon from "@material-ui/icons/Code";
import { useState } from "react";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { IconButton } from "@material-ui/core";

function Timeline() {
  const timeEntries = [
    {
      left: true,
      headline: "Barnes-Hut Algorithm",
      content:
        "In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm",
      tag: ["coding"],
    },
    {
      left: false,
      headline: "Sorting Algorithms (+Visualizer)",
      content:
        "In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: ",
      link: "https://github.com/ZwickPhilippe/Sorting-Visualizer",
      linkName: "Sorting-Visualizer",
      tag: ["algorithms"],
    },
  ];

  const [selectedTags, setSelectedTags] = useState(["algorithms", "coding"]);

  const toggleTag = (currentTag) => {
    if (selectedTags.includes(currentTag)) {
      let copy = selectedTags.filter((element) => {
        return element != currentTag;
      });
      setSelectedTags([...copy]);
    } else {
      selectedTags.push(currentTag);
      setSelectedTags([...selectedTags]);
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "white" }}>
          Currently chosen Tags: {selectedTags.toString()}
        </h2>
        {selectedTags.includes("algorithms") && (
          <IconButton aria-label="delete" color="inherit">
            <AccountTreeIcon />
          </IconButton>
        )}
        {selectedTags.includes("coding") && <CodeIcon />}
      </div>
      <div className="timeline">
        <div></div>
        {timeEntries.map((timeEntry, index) => {
          let includes = false;
          timeEntry.tag.forEach((tag) => {
            if (selectedTags.includes(tag)) {
              includes = true;
            }
          });
          if (includes) {
            return (
              <TimelineContainer
                key={index}
                left={timeEntry.left}
                headline={timeEntry.headline}
                tag={timeEntry.tag}
                content={timeEntry.content}
                link={timeEntry.link}
                linkName={timeEntry.linkName}
                toggleTag={toggleTag}
              ></TimelineContainer>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
}

export default Timeline;
