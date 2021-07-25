import React from 'react';
import '../App.css';
import TimelineContainer from './TimelineContainer';

function Timeline(){


    return(
        <div className="timeline">
            <TimelineContainer left={true} headline={"Titel 1"} content={"Das ist der aktuelle Wert"}></TimelineContainer>
            <TimelineContainer left={false} headline={"Sorting Algorithms (+Visualizer)"} content={"In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: "} link={"https://github.com/ZwickPhilippe/Sorting-Visualizer"} linkName={"Sorting-Visualizer"}></TimelineContainer>
            <TimelineContainer left={true} headline={"Titel 3"} content={"Das ist der aktuelle Wert"}></TimelineContainer>
            <TimelineContainer left={false} headline={"Titel 4"} content={"Das ist der aktuelle Wert"}></TimelineContainer>


      </div>
    )
}

export default Timeline;