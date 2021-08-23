import React from 'react'
import ReactPlayer from 'react-player/lazy'


export const Player = (props) => {
    const videoPath = `http://localhost:5000/videos/${props.props.location}`;
    return (
        <ReactPlayer 
        url={videoPath}
        stopOnUnmount={true}
        playing={true}
        controls={true}
         />
    )
  }