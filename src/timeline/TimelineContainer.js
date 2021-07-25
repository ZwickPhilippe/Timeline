import React from 'react';
import '../App.css';


function TimelineContainer(props){


    const printProp=()=>{
        console.log(props.left)
        console.log(props.link)
    }


    return(
            <React.Fragment>
            <div className={'timelineContainer ' + (props.left? "left" : "right")}>
                <h2>{props.headline}</h2>
                <p>{props.content}  <a href={props.link} style={{textDecoration: 'none'}}>{props.linkName}</a> <i className="fas fa-sitemap"></i></p>
            </div>
           
            </React.Fragment>
            
        
    )
}

export default TimelineContainer;