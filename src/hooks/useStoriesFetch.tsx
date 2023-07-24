import { useState, useEffect, useRef } from "react";

import { getStoriesIds, getStories } from "../utils/apiClient";

type useStoriesFetchProps = {
  autoRefreshDelay?: number,
  chunkSize?: number,
}

const useStoriesFetch = ({ autoRefreshDelay = 30, chunkSize = 20 }: useStoriesFetchProps) => {
  const refreshInterval = useRef(0);

  const [chunkArea, setChunkArea] = useState([0, chunkSize]);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [storiesIds, setStoriesIds] = useState<number[]>([]);
  const [stories, setStories] = useState<IStory[]>([]);

  const refresh = () => {
    setIsLoading(true);
    setCanLoadMore(true);
    setChunkArea([0, chunkSize]);
    getStoriesIds()
      .then((newStoriesIds) => {
        setStoriesIds(newStoriesIds);
        getStories(newStoriesIds.slice(0, chunkSize))
          .then((newStories) => {
            setStories(newStories);
          })
          .finally(() => {
            setIsLoading(false);
            setRefreshInterval();
          })
      })
      .catch(() => setIsLoading(false));
  };

  const loadNextChunk = () => {
    const newChunkArea = [chunkArea[1], Math.min(chunkArea[1] + chunkSize, storiesIds.length)];
    setIsLoading(true);
    setCanLoadMore(newChunkArea[1] < storiesIds.length);
    getStories(storiesIds.slice(newChunkArea[0], newChunkArea[1]))
      .then((newStories) => {
        setStories([...stories, ...newStories]);
        setChunkArea(newChunkArea);
      })
      .finally(() => {
        setIsLoading(false);
        setRefreshInterval();
      });
  }

  const setRefreshInterval = () => {
    if (refreshInterval.current !== 0) {
      clearInterval(refreshInterval.current);
    }
    refreshInterval.current = window.setInterval(() => {
      refresh();
    }, autoRefreshDelay * 1000);
  }

  useEffect(() => {
    setIsLoading(true);
    getStoriesIds()
      .then((newStoriesIds) => {
        setStoriesIds(newStoriesIds);
        getStories(newStoriesIds.slice(chunkArea[0], chunkArea[1]))
          .then((newStories) => {
            setStories(newStories);
          })
          .finally(() => {
            setIsLoading(false)
            setRefreshInterval();
          });
      })
      .catch(() => setIsLoading(false));
  }, []);

  return { isLoading, stories, refresh, canLoadMore, loadNextChunk }
}

export default useStoriesFetch;