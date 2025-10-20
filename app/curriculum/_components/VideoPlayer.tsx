"use client";

import { ComponentRef, useEffect, useRef } from "react";
import Vimeo from "@vimeo/player";

interface VideoPlayerProps {
  videoId: string;
}

function VideoPlayer({ videoId }: VideoPlayerProps) {
  const vimeoPlayerRef = useRef<ComponentRef<"div">>(null);

  useEffect(() => {
    if (vimeoPlayerRef.current) {
      const player = new Vimeo(vimeoPlayerRef.current, {
        id: parseInt(videoId),
        responsive: true,
      });

      player
        .ready()
        .then(() => {
          // Player is ready
        })
        .catch((error) => {
          console.error("Error initializing Vimeo player:", error);
        });

      player.on("ended", () => onEnded());
    }
  }, [videoId]);

  const onEnded = () => {
    console.log("Video ended");
  };

  return (
    <div>
      <div ref={vimeoPlayerRef}></div>
    </div>
  );
}

export default VideoPlayer;
