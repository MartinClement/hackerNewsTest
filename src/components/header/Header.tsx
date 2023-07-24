import BaseContainer from "../container/BaseContainer";
import style from "./header.module.css";

type HeaderProps = {
  children: React.ReactNode,
};

function Header({ children }: HeaderProps) {
  return (
    <header className={style.header_wrapper}>
      <BaseContainer>
        <div className={style.header_layout}>
          <h1 className={style.header_title}>HackerNews</h1>
          { children }
        </div>
      </BaseContainer>
    </header>
  )
}

export default Header;