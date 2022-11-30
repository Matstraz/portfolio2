import { css } from "aphrodite";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../utils/Animations";
import i18n from "../../utils/i18n";
import icons from "../../utils/Icons";

export default function Homepage() {
  const [enter, setEnter] = useState(false);

  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  function handleEnter() {
    setEnter(true);
  }

  return (
    <div
      className={
        enter
          ? "h-screen bg-slate-800 flex flex-col md:flex-row text-slate-200 relative"
          : " h-screen bg-slate-800 flex flex-col justify-center items-center text-slate-200 gap-3 text-3xl md:text-5xl relative"
      }
    >
      <div
        className={
          enter ? "hidden" : "flex flex-col justify-center items-center"
        }
      >
        <h1>{t("homepage.welcome.message")}</h1>
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
          {t("homepage.welcome.button")}
        </button>
      </div>
      {enter && (
        <Link
          to="/"
          className={`${css(
            styles.fadeInRight1
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pt-5 text-4xl md:text-8xl`}
          onClick={() => setEnter(false)}
        >
          {t("homepage.entered.home")}
        </Link>
      )}
      {enter && (
        <Link
          to="/about"
          className={`${css(
            styles.fadeInRight2
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pt-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.about")}
        </Link>
      )}
      {enter && (
        <Link
          to="/languages"
          className={`${css(
            styles.fadeInRight3
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pt-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.languages")}
        </Link>
      )}
      {enter && (
        <Link
          to="/projects"
          className={`${css(
            styles.fadeInRight4
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pt-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.projects")}
        </Link>
      )}
      {enter && (
        <Link
          to="/contacts"
          className={`${css(
            styles.fadeInRight5
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pt-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.contacts")}
        </Link>
      )}
      <select
        className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1"
        onClick={handleLanguage}
      >
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>

      <div className="flex gap-4 absolute top-5 left-5 justify-between items-center">
        <a
          href="https://www.linkedin.com/in/matteo-strazzera-ba26781b8/"
          className="flex justify-center items-center"
        >
          {icons.linkedin}
        </a>
        <a
          href="https://github.com/Matstraz"
          className="flex justify-center items-center"
        >
          {icons.github}
        </a>
        <a
          href="https://www.facebook.com/mat.strazzera"
          className="flex justify-center items-center"
        >
          {icons.facebook}
        </a>
      </div>
    </div>
  );
}
