import style from "./storyAction.module.css"


type StoryActions = {
  cta(): void,
  locked: boolean,
  children: React.ReactNode,
}

export default function StoryAction({ cta, locked, children }: StoryActions) {
  const handleAction = () => {
    if (locked) return;
    cta();
  }

  return (
    <button
      className={style.button}
      disabled={locked}
      onClick={() => handleAction()}
    >
      { children }
    </button>
  )
}