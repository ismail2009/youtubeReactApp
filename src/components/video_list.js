import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const VideoItem = props.videos.map((item) => <VideoListItem
    onVideoSelect = { props.onVideoSelect }
    key= { item.etag }
    video = {item}
   /> )
  return (
    <div className="side_bar">
        <ul className="list-group">
          { VideoItem }
        </ul>
    </div>
  );
};

export default VideoList;
