import { useState, useEffect, useCallback } from "react";

interface VideoPlayerState {
  played: boolean;
  playing: boolean;
}

interface VideoPlayerState {
  played: boolean;
  playing: boolean;
  handlePlay: () => void;
  handlePause: () => void;
}

const useVideoPlayer = (videoUrl: string): VideoPlayerState => {
  const [played, setPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setPlayed(true);
    setPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setPlaying(false);
  }, []);

  useEffect(() => {
    setPlayed(false);
    setPlaying(false);
  }, [videoUrl]);

  return {
    played,
    playing,
    handlePlay,
    handlePause,
  };
};

export default useVideoPlayer;
