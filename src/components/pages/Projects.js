import i18n from "../../utils/i18n";
import Navbar from "../common/Navbar";

export default function Projects() {
  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="bg-slate-800 min-h-screen text-slate-200">
      <Navbar projects />
      <div className="relative">
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
