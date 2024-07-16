import { useLocation, useParams } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.svg";
import { LinkBtn } from "Components/LinkBtn";
export const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo do site" />

      <nav className={styles.nav}>
        <LinkBtn ativo={location.pathname === "/"} url="/">
          Home
        </LinkBtn>
        <LinkBtn ativo={location.pathname === "/novovideo"} url="novovideo">
          Novo video
        </LinkBtn>
      </nav>
    </header>
  );
};
