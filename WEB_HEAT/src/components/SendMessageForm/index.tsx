import { useContext } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../context/auth";
import styles from "./styles.module.scss";

export function SendMessageList() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="26" />
      </button>
      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt="" />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="18" />
          {user?.login}
        </span>
      </header>
      <form className={styles.sendMessageForm}>
        <label htmlFor="message">Messagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua espectativa para o evento?"
        />
        <button type="submit">Enviar mensssagem</button>
      </form>
    </div>
  );
}
