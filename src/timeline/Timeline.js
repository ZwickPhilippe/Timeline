import React from 'react';
import '../App.css';
import TimelineContainer from './TimelineContainer';
import CodeIcon from '@material-ui/icons/Code';
import { useState } from 'react';

function Timeline(){


    const timeEntries=[ {left: true, headline: "Barnes-Hut Algorithm", content:"In programming we needed to create a simulation that should be able to represent planets and the forces they apply on each other. This was done using an Octree and the Barnes-Hut Algorithm", tag:['algorithms', 'coding']},{left:false, headline:"Sorting Algorithms (+Visualizer)", content:"In algorithmics I learned about the simple and the more complex (but therefore faster) sorting algorithms. I decided to create a visualizer, that can be viewed here: ", link:"https://github.com/ZwickPhilippe/Sorting-Visualizer", linkName:"Sorting-Visualizer", tag:['algorithms']} ]

    const [selectedTags, setSelectedTags] = useState(['algorithms', 'coding'])

    return(
        <React.Fragment>
        {/* <div >
            <h2> Currently chosen Tags: {selectedTags.toString()}</h2>
        </div> */}
        <div className="timeline">
            {timeEntries.map((timeEntry, index)=>{
                let includes= false;
                timeEntry.tag.forEach((tag)=>{
                    if(selectedTags.includes(tag)){
                        includes=true;
                    }
                })
                if(includes){
                    return (<TimelineContainer key={index} left={timeEntry.left} headline={timeEntry.headline} tag={timeEntry.tag} content={timeEntry.content} link={timeEntry.link} linkName={timeEntry.linkName}  ></TimelineContainer>)

                }
            })}

      </div>
      </React.Fragment>
    )
}

export default Timeline;