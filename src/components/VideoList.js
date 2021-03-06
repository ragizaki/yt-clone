import React from 'react';

// Components
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideosList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div className='ui relaxed divided list'>{renderedVideosList}</div>;
};

export default VideoList;
