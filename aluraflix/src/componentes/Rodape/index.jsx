import styles from "./Rodape.module.css";
import logo from "./Logo.png";
export const Rodape = () => {
  return (
    <Rodape className={styles.Rodape}>
      <img className={styles.logo} src={logo} alt="logo alura flix" />
    </Rodape>
  );
};
