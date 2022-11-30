import i18n from "../../../utils/i18n";
import bazaar from "../../../assets/pics/bazaar.png";
import finlab from "../../../assets/pics/finlab.jpg";
import fontanelle from "../../../assets/pics/fontanelle.jpg";
import optionsfy from "../../../assets/pics/optionsfy.jpg";
import ubisoft from "../../../assets/pics/ubisoft.jpg";
import icons from "../../../utils/Icons";
import ImageCarouselZoom from "./ImageCarouselZoom";
import Navbar from "../../common/Navbar";
import { useTranslation } from "react-i18next";

export default function Projects() {
  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  const { t } = useTranslation();

  const bazaarData = (
    <div className="flex gap-4">
      <a
        href="https://bazaar-trader.netlify.app/"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/bazaar_trader/tree/develop"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const ubisoftData = (
    <div className="flex gap-4">
      <a
        href="https://github.com/Matstraz/Ubisoft-Site-Project/tree/develop"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const finlabData = (
    <div className="flex gap-4">
      <a
        href="https://github.com/Matstraz/Finlab-Javascript-Project---Team-3/tree/develop"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const optionsfyData = (
    <div className="flex gap-4">
      <a
        href="https://optionsfy-fe.netlify.app/"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/Optionsfy-Frontend/"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const fontanelleData = (
    <div className="flex gap-4">
      <a
        href="https://lefontanelle.netlify.app/"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/agriturismo/tree/develop"
        className="border-2 px-3 py-1 text-xl mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const imagesData = [
    { image: bazaar, links: bazaarData },
    { image: finlab, links: finlabData },
    { image: fontanelle, links: fontanelleData },
    { image: optionsfy, links: optionsfyData },
    { image: ubisoft, links: ubisoftData },
  ];
  return (
    <div className="bg-slate-800 min-h-screen h-8 text-slate-200">
      <div className="h-fit">
        <Navbar projects />
      </div>
      <div className="relative">
        <h1 className="text-4xl p-5">
          {icons.verticalLines} {t("projects.title")}
        </h1>{" "}
        <select
          className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1"
          onClick={handleLanguage}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      <div className=" h-5/6 flex justify-center items-center">
        <ImageCarouselZoom imagesData={imagesData} />
      </div>
    </div>
  );
}
