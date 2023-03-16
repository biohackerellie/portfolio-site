import React from "react"
import ReactPlayer from "react-player"

function Soundcloud(props) {
  return (
      <ReactPlayer
        url={props.url}
        height={props.height}
        width={props.width}
      />
  )
}

export default Soundcloud