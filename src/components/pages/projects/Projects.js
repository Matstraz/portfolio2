import i18n from "../../../utils/i18n";
import bazaar from "../../../assets/pics/bazaar.png";
import finlab from "../../../assets/pics/finlab.jpg";
import fontanelle from "../../../assets/pics/fontanelle.jpg";
import optionsfy from "../../../assets/pics/optionsfy.jpg";
import eshop from "../../../assets/pics/eshop.png";
import ubisoft from "../../../assets/pics/ubisoft.jpg";
import poker from "../../../assets/pics/poker.png";
import nazabot from "../../../assets/pics/nazabot.png";
import wedding from "../../../assets/pics/wedding.png";
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
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://bazaar-trader.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/bazaar_trader/tree/develop"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const ubisoftData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://github.com/Matstraz/Ubisoft-Site-Project/tree/develop"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const finlabData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://github.com/Matstraz/Finlab-Javascript-Project---Team-3/tree/develop"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const optionsfyData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://optionsfy-fe.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/Optionsfy-Frontend/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const fontanelleData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://lefontanelle.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/agriturismo/tree/develop"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const eshopData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://eshopsimulation.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/E-shop"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const pokerData = (
    <div className="flex gap-2 justify-center items-center flex-col">
      <div className="flex gap-4 justify-center items-center">
        <a
          href="https://texaspoker.netlify.app/"
          className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
        >
          Demo
        </a>
        <a
          href="https://github.com/Matstraz/texasholdem"
          className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
        >
          {icons.githubMini} Code
        </a>
      </div>
      <div className="flex gap-2 justify-center items-center border-2 px-1 md:px-3 text-sm">
        {icons.warning}
        <p>Under Construction</p>
        {icons.warning}
      </div>
    </div>
  );

  const nazabotData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://nazabot2.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/nazabot2.0"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        {icons.githubMini} Code
      </a>
    </div>
  );

  const weddingData = (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://alessandraematteo2.netlify.app/"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
      >
        Demo
      </a>
      <a
        href="https://github.com/Matstraz/wedding2"
        className="border-2 px-1 md:px-3 md:py-1 text-xl mt-3 md:mt-6"
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
    { image: eshop, links: eshopData },
    { image: poker, links: pokerData },
    { image: nazabot, links: nazabotData },
    { image: wedding, links: weddingData },
  ];
  return (
    <div className="bg-slate-800 min-h-screen lg:h-screen text-slate-200">
      <div className="h-fit">
        <Navbar projects />
      </div>
      <div className="relative">
        <h1 className="text-4xl p-5">
          {icons.verticalLines} {t("projects.title")}
        </h1>{" "}
        <select className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1">
          <option onClick={handleLanguage} value="en">
            English
          </option>
          <option onClick={handleLanguage} value="it">
            Italiano
          </option>
        </select>
      </div>

      <div className="hidden h-4/5 lg:flex justify-center items-center">
        <ImageCarouselZoom imagesData={imagesData} />
      </div>

      <div className="lg:hidden h-5/6 grid sm:grid-cols-2 grid-cols-1 p-5 gap-7">
        {imagesData.map((el, index) => (
          <div key={el + index}>
            {<img src={el.image} alt="Example pic" />}
            {el.links}
          </div>
        ))}
      </div>
    </div>
  );
}
