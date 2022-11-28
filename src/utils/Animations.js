import { StyleSheet } from "aphrodite";
import { bounce, fadeInRight } from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeInRight1: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
  fadeInRight2: {
    animationName: fadeInRight,
    animationDuration: "2s",
  },
  fadeInRight3: {
    animationName: fadeInRight,
    animationDuration: "2.5s",
  },
  fadeInRight4: {
    animationName: fadeInRight,
    animationDuration: "3s",
  },
  fadeInRight5: {
    animationName: fadeInRight,
    animationDuration: "3.5s",
  },
});

export default styles;
