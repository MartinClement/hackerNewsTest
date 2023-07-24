import { fromNow } from "../../utils/dateFormater";

import style from "./storyView.module.css"

type StoryViewProps = {
  story: IStory,
  index: number,
}

export default function StoryView({ story, index }: StoryViewProps) {
  return (
    <div className={style.story_view}>
      <div className={style.story_heading}>
        <span className={style.secondary}>{ index }.</span>
        <span>{ story.title }</span>
        <span className={`${style.secondary} ${style.story_link_wrapper}`}>(<a
          className={style.story_link}
          href={story.url}
          title={story.title}
          target="_blank"
        >{story.url}</a>)</span>
      </div>
      <div className={style.story_details}>
        <span>{ story.score } points</span>
        <span><span className={style.secondary}>by</span> { story.by }</span>
        <span>{ story.time && fromNow(story.time * 1000)}</span>
        <span className={style.divider}></span>
        <span>{ story.kids && story.kids.length } comments</span>
      </div>
    </div>
  )
}