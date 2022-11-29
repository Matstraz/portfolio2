import i18n from "../../../utils/i18n";
import Navbar from "../../common/Navbar";
import DynamicIconCloud from "./ToolsIcons";

export default function Tools() {
  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="bg-slate-800 h-screen text-slate-200 flex flex-col">
      <div className="h-min">
        <Navbar languages />
      </div>

      <div className="h-full relative flex justify-center items-center">
        <DynamicIconCloud />

        <select
          className="absolute top-5 right-5 bg-slate-700 "
          onClick={handleLanguage}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
      </div>
    </div>
  );
}
