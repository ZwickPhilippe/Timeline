import React from 'react';
import '../App.css';
import { IconButton } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CodeIcon from '@material-ui/icons/Code';
function TimelineContainer(props){


    const printProp=()=>{
        console.log(props.left)
        console.log(props.link)
    }


    return(
            <React.Fragment>
            <div className={'timelineContainer ' + (props.left? "left" : "right")}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <h2>{props.headline}</h2>
                <div style={props.tag.includes('algorithms')? {width: '10%', marginTop: '2%'} : {display:'none'}}>
            
                <IconButton aria-label="delete" color='inherit'>
                    <AccountTreeIcon />
                </IconButton>       
                </div>   
                <div style={props.tag.includes('coding')? {width: '10%', marginTop: '2%'} : {display:'none'}}>
            
                <IconButton aria-label="delete" >
                    <CodeIcon />
                </IconButton>       
                </div> 
                </div>        
                <p>{props.content}  <a href={props.link} style={{textDecoration: 'none'}}>{props.linkName}</a> </p>
            </div>
           
            </React.Fragment>
            
        
    )
}

export default TimelineContainer;