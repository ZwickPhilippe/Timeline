import React from 'react';
import '../App.css';


function TimelineContainer(props){


    const printProp=()=>{
        console.log(props.left)
    }


    return(
            <React.Fragment>
            <div className={'timelineContainer ' + (props.left? "left" : "right")}>
                <h2>{props.headline}</h2>
                <p>{props.content}</p>
            </div>
           
            </React.Fragment>
            
        
    )
}

export default TimelineContainer;