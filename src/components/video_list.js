import React from 'react';
import VideoListItem from './video_list_item';

// "props" will arrive as an argument for our functional component

// "props" in a class based component are available in any method by using "this.props"
const VideoList = (props) => {
  const videoItems = props.videos.map((video) =>{
    return <VideoListItem key={video.etag} video={video} />;
  });

  return(
    <ul className="col-md-4 list-group">
      {/* {props.videos.length} */}
      {videoItems}
    </ul>
  );
};

export default VideoList;
