import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../utils/i18n";
import icons from "../../utils/Icons";

export default function Navbar({ about, languages, projects, contacts }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <nav className="bg-slate-800 text-2xl flex md:flex-row flex-col justify-center items-center border-b gap-8 py-2">
      <Link to="/" className={"hidden md:flex gap-1 items-center"}>
        {icons.home}
        {t("navbar.home")}
      </Link>

      <Link
        to="/about"
        className={about ? "hidden" : "hidden md:flex gap-1 items-center"}
      >
        {icons.about}

        {t("navbar.about")}
      </Link>
      <Link
        to="/languages"
        className={languages ? "hidden" : "hidden md:flex gap-1 items-center"}
      >
        {icons.languages}

        {t("navbar.languages")}
      </Link>
      <Link
        to="/projects"
        className={projects ? "hidden" : "hidden md:flex gap-1 items-center"}
      >
        {icons.projects}

        {t("navbar.projects")}
      </Link>
      <Link
        to="/contacts"
        className={contacts ? "hidden" : "hidden md:flex gap-1 items-center"}
      >
        {icons.contactsInfinite}

        {t("navbar.contacts")}
      </Link>
      {/*  Burger menu */}
      <div className="ml-3 md:hidden z-10 self-end">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-slate-200" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-3 right-3 w-auto bg-slate-800">
            <div className="p-1 bg-gradient-to-t from-myBlue-700 to-myBlue-400 w-full border-2">
              <div className="p-1 pt-2 pb-3 gap-5 flex items-center justify-between border-b">
                <select
                  className=" bg-slate-700 w-max py-1"
                  onClick={handleLanguage}
                >
                  <option value="en">English</option>
                  <option value="it">Italiano</option>
                </select>
                <div className="flex items-center">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="rounded p-1 mb-1 border text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="w-4 text-slate-200  hover:text-slate-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="p-3 ">
                <ul className="space-y-4 text-slate-200">
                  <Link to="/" className={"flex gap-2 items-center border-b "}>
                    {icons.home}
                    {t("navbar.home")}
                  </Link>

                  <Link
                    to="/about"
                    className={
                      about ? "hidden" : "flex gap-2 items-center border-b"
                    }
                  >
                    {icons.about}

                    {t("navbar.about")}
                  </Link>
                  <Link
                    to="/languages"
                    className={
                      languages ? "hidden" : "flex gap-2 items-center border-b"
                    }
                  >
                    {icons.languages}

                    {t("navbar.languages")}
                  </Link>
                  <Link
                    to="/projects"
                    className={
                      projects ? "hidden" : "flex gap-2 items-center border-b"
                    }
                  >
                    {icons.projects}

                    {t("navbar.projects")}
                  </Link>
                  <Link
                    to="/contacts"
                    className={
                      contacts ? "hidden" : "flex gap-2 items-center border-b"
                    }
                  >
                    {icons.contactsInfinite}

                    {t("navbar.contacts")}
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
