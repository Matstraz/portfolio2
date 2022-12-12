import { StyleSheet } from "aphrodite";
import { bounce, fadeInUp, tada, zoomIn } from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  zoom: {
    animationName: zoomIn,
    animationDuration: "1s",
  },
  fadeInRight1: {
    animationName: fadeInUp,
    animationDuration: "1s",
  },
  fadeInRight2: {
    animationName: fadeInUp,
    animationDuration: "2s",
  },
  fadeInRight3: {
    animationName: fadeInUp,
    animationDuration: "2.5s",
  },
  fadeInRight4: {
    animationName: fadeInUp,
    animationDuration: "3s",
  },
  fadeInRight5: {
    animationName: fadeInUp,
    animationDuration: "3.5s",
  },
  tada2: {
    animationName: tada,
    animationDuration: "3.5s",
    animationIterationCount: "infinite",
  },
});

export default styles;
