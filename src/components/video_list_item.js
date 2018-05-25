import React from 'react';

const VideoListItem = ({video, onVideoSelect }) => {
  const img_url = video.snippet.thumbnails.default.url;
  var snipTitle = video.snippet.title.length <= 30?video.snippet.title :video.snippet.title.slice(0, 40);
  return (
    <li onClick={() => { onVideoSelect(video)}}>
      <div className="video_list-media">
        <div className="media_left">
            <img className="media_object" src={img_url} alt="bad connection not avaliable for now" />
        </div>
        <div className="media_body">
          <div className="media_header">
            {snipTitle}
          </div>
        </div>
      </div>
    </li>
);}

export default VideoListItem;
