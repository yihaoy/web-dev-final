import React from 'react'

export const YoutubeWidget = youtube_url => {
    return (
        <div>
            <iframe width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${youtube_url.src}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen/>
        </div>
    );
}