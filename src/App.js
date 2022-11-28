import { css } from "aphrodite";
import styles from "./Animations";

function App() {
  return (
    <div>
      <p className={css(styles.fadeInRight)}>prova</p>;
    </div>
  );
}

export default App;
