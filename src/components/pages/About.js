import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import icons from "../../utils/Icons";
import Navbar from "../common/Navbar";

export default function About() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="bg-slate-800 min-h-screen text-slate-200 text-justify">
      <div className="h-min">
        <Navbar about />
      </div>
      <div className="relative p-5">
        <h1 className="text-4xl">
          {icons.verticalLines} {t("about.title")}
        </h1>
        <div className="mt-5 text-lg"> {t("about.description")}</div>
        <div className="flex flex-col lg:flex-row w-full mt-10 gap-5">
          <div className="lg:w-1/2">
            <div className="text-3xl">
              {icons.verticalLines} {t("about.education.title")}
            </div>
            <div className="flex flex-col lg:flex-row w-full mt-5">
              <div className="lg:w-1/2 border-l px-3">
                <div>
                  {icons.graduation} &nbsp; 2022
                  <p className="font-bold mt-1">
                    {t("about.education.course")}
                  </p>
                  <p className="mt-3">{t("about.education.content")}</p>
                </div>

                <div className="mt-10">
                  {icons.graduation} &nbsp; 2020
                  <p className="font-bold mt-1">
                    {t("about.education.internship")}
                  </p>
                  <p className="mt-3">{t("about.education.content2")}</p>
                </div>

                <div className="mt-10">
                  {icons.graduation} &nbsp; 2018
                  <p className="font-bold mt-1">
                    {t("about.education.master")}
                  </p>
                  <p className="mt-3">{t("about.education.content3")}</p>
                </div>
              </div>
              <div className="lg:w-1/2 border-l px-3">
                <div>
                  {icons.graduation} &nbsp; 2013
                  <p className="font-bold mt-1">
                    {t("about.education.bachelor")}
                  </p>
                  <p className="mt-3">{t("about.education.content4")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-between mt-7 lg:mt-0">
            <div>
              <h1 className="text-3xl">
                {icons.verticalLines} {t("about.experience.title")}
              </h1>
              <div className="flex flex-col lg:flex-row w-full mt-3  ">
                <div className="lg:w-1/2 border-l px-3">
                  <div>
                    {icons.job} &nbsp; 02/2022 - present
                    <p className="font-bold mt-1">
                      {t("about.experience.job1")}
                    </p>
                    <p className="mt-3">{t("about.experience.content")}</p>
                  </div>

                  <div className="mt-10">
                    {icons.job} &nbsp; 04/2017 - 10/2017
                    <p className="font-bold mt-1">
                      {t("about.experience.job2")}
                    </p>
                    <p className="mt-3">{t("about.experience.content2")}</p>
                  </div>

                  <div className="mt-10">
                    {icons.job} &nbsp; 06/2016 - 03/2017
                    <p className="font-bold mt-1">
                      {t("about.experience.job3")}
                    </p>
                    <p className="mt-3">{t("about.experience.content3")}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 border-l px-3">
                  <div>
                    {icons.job} &nbsp; 03/2013 - 12/2014
                    <p className="font-bold mt-1">
                      {t("about.experience.job4")}
                    </p>
                    <p className="mt-3">{t("about.education.content4")}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/17ZzOQQ4Fyw3jpXCrhjPoMi-D8YMUAmwq/view?usp=sharing"
              className="self-center border-2 px-3 py-1 text-xl mt-8 lg:mt-auto"
            >
              {t("about.download")}
            </a>
          </div>
        </div>
        <select
          className="hidden lg:block absolute top-5 right-5 bg-slate-700 py-1"
          onClick={handleLanguage}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
      </div>
    </div>
  );
}
