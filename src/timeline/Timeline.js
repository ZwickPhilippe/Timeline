import React from 'react';
import '../App.css';
import TimelineContainer from './TimelineContainer';

function Timeline(){


    return(
        <div className="timeline">
            <TimelineContainer left={true} headline={"Titel 1"} content={"Das ist der aktuelle Wert"}></TimelineContainer>
            <TimelineContainer left={false} headline={"Titel 2"} content={"Das ist der aktuelle Wert"}></TimelineContainer>
            <TimelineContainer left={true} headline={"Titel 3"} content={"Das ist der aktuelle Wert"}></TimelineContainer>
            <TimelineContainer left={false} headline={"Titel 4"} content={"Das ist der aktuelle Wert"}></TimelineContainer>


      </div>
    )
}

export default Timeline;