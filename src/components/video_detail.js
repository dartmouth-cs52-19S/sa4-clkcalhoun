import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    // <div id="video-detail">
    //   <iframe src={url} title="video-detail" />
    //   <div className="details">
    //     <div>{video.snippet.title}</div>
    //     <div>{video.snippet.description}</div>
    //   </div>
    // </div>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" title="video-detail" src={url} />
    </div>
  );
};

export default VideoDetail;
