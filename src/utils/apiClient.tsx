import axios from "axios";

import { constants } from "./constants";

const BASE_API_URL = constants.HN_BASE_API_URL;

const getStory = async (id: number): Promise<IStory> => {
    const { data: story } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
}

const getStoriesIds = async (): Promise<number[]> => {
  const { data: storiesIds } = await axios.get(`${BASE_API_URL}/topstories.json`);
  return storiesIds;
}

const getStories  = async (ids: number[]): Promise<IStory[]> => {
  const stories = await Promise.all(ids.map(id => getStory(id)));
  return stories.filter(story => Boolean(story));
}


export { getStoriesIds, getStories }