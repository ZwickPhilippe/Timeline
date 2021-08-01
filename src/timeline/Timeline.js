import React from "react";
import "../App.css";
import TimelineContainer from "./TimelineContainer";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import { useState } from "react";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import { IconButton, Tooltip } from "@material-ui/core";

function Timeline() {
  const timeEntries = [
    {
      headline: "Barnes-Hut Algorithm",
      content:
        "In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm",
      tag: ["coding"],
    },
    {
      headline: "Sorting Algorithms (+Visualizer)",
      content:
        "In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: ",
      link: "https://github.com/ZwickPhilippe/Sorting-Visualizer",
      linkName: "Sorting-Visualizer",
      tag: ["algorithms"],
    },
    {
      headline: "Wir sind Biene Website",
      content:
        "For the 'Wir sind Biene' (='We are bees') bee-project in my high school, I created a website using HTML, CSS and Bootstrap. The website can be viewed here:",
      tag: ["projects"],
      link: "http://www.wirsindbiene.eu/index.html",
      linkName: "Wir sind Biene!",
    },
    {
      headline: "Barnes-Hut Algorithm",
      content:
        "In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm",
      tag: ["coding"],
    },
    {
      headline: "Sorting Algorithms (+Visualizer)",
      content:
        "In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: ",
      link: "https://github.com/ZwickPhilippe/Sorting-Visualizer",
      linkName: "Sorting-Visualizer",
      tag: ["algorithms"],
    },
    {
      headline: "Wir sind Biene Website",
      content:
        "For the 'Wir sind Biene' (='We are bees') bee-project in my high school, I created a website using HTML, CSS and Bootstrap. The website can be viewed here:",
      tag: ["projects"],
      link: "http://www.wirsindbiene.eu/index.html",
      linkName: "Wir sind Biene!",
    },
    {
      headline: "Wir sind Biene Website",
      content:
        "For the 'Wir sind Biene' (='We are bees') bee-project in my high school, I created a website using HTML, CSS and Bootstrap. The website can be viewed here:",
      tag: ["projects"],
      link: "http://www.wirsindbiene.eu/index.html",
      linkName: "Wir sind Biene!",
    },
    {
      headline: "Barnes-Hut Algorithm",
      content:
        "In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm",
      tag: ["coding"],
    },
    {
      headline: "Sorting Algorithms (+Visualizer)",
      content:
        "In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: ",
      link: "https://github.com/ZwickPhilippe/Sorting-Visualizer",
      linkName: "Sorting-Visualizer",
      tag: ["algorithms"],
    },
    {
      headline: "Wir sind Biene Website",
      content:
        "For the 'Wir sind Biene' (='We are bees') bee-project in my high school, I created a website using HTML, CSS and Bootstrap. The website can be viewed here:",
      tag: ["projects"],
      link: "http://www.wirsindbiene.eu/index.html",
      linkName: "Wir sind Biene!",
    },
  ];

  const [selectedTags, setSelectedTags] = useState([
    "algorithms",
    "coding",
    "projects",
    "work",
  ]);
  let left = false;

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
      <div className="tagLegend">
        <h2>Tags: </h2>
        <Tooltip title="Algorithm">
          <IconButton
            style={
              selectedTags.includes("algorithms")
                ? { color: "#93d13e" }
                : { color: "white" }
            }
            onClick={() => toggleTag("algorithms")}
          >
            <AccountTreeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Coding">
          <IconButton
            style={
              selectedTags.includes("coding")
                ? { color: "#93d13e" }
                : { color: "white" }
            }
            onClick={() => toggleTag("coding")}
          >
            <CodeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Projects">
          <IconButton
            style={
              selectedTags.includes("projects")
                ? { color: "#93d13e" }
                : { color: "white" }
            }
            onClick={() => toggleTag("projects")}
          >
            <DeveloperBoardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Work">
          <IconButton
            style={
              selectedTags.includes("work")
                ? { color: "#93d13e" }
                : { color: "white" }
            }
            onClick={() => toggleTag("work")}
          >
            <WorkIcon />
          </IconButton>
        </Tooltip>
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
            left = !left;
            return (
              <TimelineContainer
                key={index}
                left={left}
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
