import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n";
import icons from "../../../utils/Icons";
import Navbar from "../../common/Navbar";
import DynamicIconCloud from "./ToolsIcons";

export default function Tools() {
  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  const { t } = useTranslation();

  return (
    <div className="bg-slate-800 min-h-screen lg:h-screen text-slate-200 flex flex-col">
      <div className="h-min">
        <Navbar languages />
      </div>
      <div className="relative h-4/6">
        <h1 className="text-4xl p-5">
          {icons.verticalLines} {t("tools.title")}
        </h1>
        <div className="h-full flex justify-center items-center">
          <DynamicIconCloud />

          <select className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1">
            <option onClick={handleLanguage} value="en">
              English
            </option>
            <option onClick={handleLanguage} value="it">
              Italiano
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
