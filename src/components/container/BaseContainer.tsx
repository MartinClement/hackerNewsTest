import style from "./baseContainer.module.css";

type BaseContainerProps = {
  children: React.ReactNode;
}

export default function BaseContainer({ children }: BaseContainerProps) {
  return (
    <div className={style.base_container}>
      { children }
    </div>
  )
}