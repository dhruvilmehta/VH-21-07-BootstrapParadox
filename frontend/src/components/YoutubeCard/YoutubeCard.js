import React from "react";
import './YoutubeCard.css'

function YoutubeCard() {
  return (
    <div class="youtube-videos">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/scEDHsr3APg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/scEDHsr3APg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeCard;
