import { css } from "aphrodite";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../utils/Animations";
import i18n from "../../utils/i18n";

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
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
          onClick={() => setEnter(false)}
        >
          {t("homepage.entered.home")}
        </Link>
      )}
      {enter && (
        <Link
          to="/about"
          className={`${css(
            styles.fadeInRight1
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.about")}
        </Link>
      )}
      {enter && (
        <Link
          to="/tools"
          className={`${css(
            styles.fadeInRight3
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.languages")}
        </Link>
      )}
      {enter && (
        <Link
          to="/projects"
          className={`${css(
            styles.fadeInRight4
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.projects")}
        </Link>
      )}
      {enter && (
        <Link
          to="/contacts"
          className={`${css(
            styles.fadeInRight5
          )} h-1/5 md:w-1/5 md:h-screen border vertical flex justify-center md:justify-start items-center md:pb-5 text-4xl md:text-8xl`}
        >
          {t("homepage.entered.contacts")}
        </Link>
      )}
      <select
        className="absolute top-5 right-5 bg-slate-700 "
        onClick={handleLanguage}
      >
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  );
}
