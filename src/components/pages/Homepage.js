import { css } from "aphrodite";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../utils/Animations";

export default function Homepage() {
  const [enter, setEnter] = useState(false);

  function handleEnter() {
    setEnter(true);
  }

  return (
    <div
      className={
        enter
          ? "h-screen bg-slate-800 flex flex-col md:flex-row text-slate-200"
          : " h-screen bg-slate-800 flex flex-col justify-center items-center text-slate-200 gap-3 text-3xl md:text-5xl"
      }
    >
      <div
        className={
          enter ? "hidden" : "flex flex-col justify-center items-center"
        }
      >
        <h1>Hello, I'm Matteo</h1>
        <h1 className=" text-center">
          <Typewriter
            words={[
              "Web Developer",
              "Front-end Developer",
              "Back-end Developer",
              "Fullstack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h1>
        <button
          className="border-2 px-3 py-1 text-3xl mt-6"
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>
      {enter && (
        <Link
          to="/"
          className={`${css(
            styles.fadeInRight1
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
          onClick={() => setEnter(false)}
        >
          Home
        </Link>
      )}
      {enter && (
        <Link
          to="/about"
          className={`${css(
            styles.fadeInRight1
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          About Me
        </Link>
      )}
      {enter && (
        <Link
          to="/tools"
          className={`${css(
            styles.fadeInRight3
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          Languages & Tools
        </Link>
      )}
      {enter && (
        <Link
          to="/projects"
          className={`${css(
            styles.fadeInRight4
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          Projects
        </Link>
      )}
      {enter && (
        <Link
          to="/contacts"
          className={`${css(
            styles.fadeInRight5
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          Contacts
        </Link>
      )}
    </div>
  );
}
