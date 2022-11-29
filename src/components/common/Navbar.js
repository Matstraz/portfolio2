import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import icons from "../../utils/Icons";

export default function Navbar({ about, languages, projects, contacts }) {
  const { t } = useTranslation();

  return (
    <nav className="bg-slate-800 text-slate-200 text-2xl flex justify-center items-center border-b gap-6 py-2">
      <Link to="/" className={"flex gap-1 items-center"}>
        {icons.home}
        {t("navbar.home")}
      </Link>

      <Link
        to="/about"
        className={about ? "hidden" : "flex gap-1 items-center"}
      >
        {icons.about}

        {t("navbar.about")}
      </Link>
      <Link
        to="/languages"
        className={languages ? "hidden" : "flex gap-1 items-center"}
      >
        {icons.languages}

        {t("navbar.languages")}
      </Link>
      <Link
        to="/projects"
        className={projects ? "hidden" : "flex gap-1 items-center"}
      >
        {icons.projects}

        {t("navbar.projects")}
      </Link>
      <Link
        to="/contacts"
        className={contacts ? "hidden" : "flex gap-1 items-center"}
      >
        {icons.contactsInfinite}

        {t("navbar.contacts")}
      </Link>
    </nav>
  );
}
