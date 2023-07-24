import Header from "./components/header/Header"
import StoriesList from "./components/story-list/StoryList";
import StoryAction from "./components/story-list/StoryAction";

import useStoriesFetch from "./hooks/useStoriesFetch";
import BaseContainer from "./components/container/BaseContainer";
import ReloadIcon from "./components/icons/ReloadIcon";

function App() {
  const { isLoading, stories, loadNextChunk, canLoadMore, refresh } = useStoriesFetch({
    chunkSize: 20,
    autoRefreshDelay: 30,
  });

  return (
    <>
      <Header>
        <StoryAction cta={refresh} locked={isLoading}>
          Refresh <ReloadIcon scale={1}></ReloadIcon>
        </StoryAction>
      </Header>
      <BaseContainer>
        <StoriesList stories={stories}></StoriesList>
        <StoryAction cta={loadNextChunk} locked={!canLoadMore || isLoading}>More</StoryAction>
      </BaseContainer>
    </>
  )
}

export default App
