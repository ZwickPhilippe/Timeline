import React from 'react';
import '../App.css';
import TimelineContainer from './TimelineContainer';
import CodeIcon from '@material-ui/icons/Code';

function Timeline(){


    return(
        <div className="timeline">
            <TimelineContainer left={true} headline={"Barnes-Hut Algorithm"} content={"In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm"} tag={['algorithms', 'coding']}></TimelineContainer>
            <TimelineContainer left={false} headline={"Sorting Algorithms (+Visualizer)"} content={"In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: "} link={"https://github.com/ZwickPhilippe/Sorting-Visualizer"} linkName={"Sorting-Visualizer"} tag={['algorithms']}></TimelineContainer>
            <TimelineContainer left={true} headline={"Titel 3"} content={"Das ist der aktuelle Wert"} tag={[]}></TimelineContainer>
            <TimelineContainer left={false} headline={"Titel 4"} content={"Das ist der aktuelle Wert"} tag={[]}></TimelineContainer>


      </div>
    )
}

export default Timeline;