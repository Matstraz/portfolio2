import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import icons from "../../utils/Icons";
import Navbar from "../common/Navbar";
import emailjs from "@emailjs/browser";
import { css } from "aphrodite";
import styles from "../../utils/Animations";

export default function Contacts() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  const formRef = useRef();

  const [data, setData] = useState({
    name: "",
    lastName: "",
    user_email: "",
    message: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9wzee3",
        "template_0zywg33",
        formRef.current,
        "f9BocO_ldWDcRVRwp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setData({
      name: "",
      lastName: "",
      user_email: "",
      message: "",
    });
    alert(t("contacts.alert"));
  };

  return (
    <div className="bg-slate-800 min-h-screen lg:h-screen text-slate-200">
      <div className="h-min">
        <Navbar contacts />
      </div>
      <div className="relative p-5 h-5/6">
        <h1 className="text-4xl ">
          {icons.verticalLines} {t("contacts.title")}
        </h1>
        <div className="h-full flex lg:flex-row flex-col md:overflow-hidden relative pt-12 lg:pt-4 lg:m-4">
          <div className="lg:w-1/3 bg-slate-800 flex">
            <div className="w-full  bg-slate-800 flex flex-col lg:-skew-x-12 justify-center items-center lg:items-end gap-10 lg:pr-10">
              <a
                href="mailto:mat.strazzera@gmail.com"
                className={`${css(styles.zoom)} lg:skew-x-12`}
              >
                <img
                  className="rounded-lg w-24"
                  src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                  alt="gmail"
                />
              </a>
              <a
                href="https://github.com/Matstraz"
                className={`${css(styles.zoom)} lg:skew-x-12`}
              >
                <img
                  className="rounded-lg w-28"
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt="github"
                />
              </a>
              <a
                href="https://www.facebook.com/mat.strazzera "
                className={`${css(styles.zoom)} lg:skew-x-12`}
              >
                <img
                  className="rounded-lg w-28"
                  src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/matteo-strazzera-ba26781b8/"
                className={`${css(styles.zoom)} lg:skew-x-12`}
              >
                <img
                  className="rounded-lg w-28"
                  src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://wa.me/393423878435?text=Ciao%20,%20ti%20contatto%20perchè%20ho%20visto%20il%20tuo%20sito"
                className={`${css(styles.zoom)} lg:skew-x-12`}
              >
                <img
                  className="rounded-lg w-28"
                  src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
          <div className=" lg:w-2/3 lg:bg-slate-900 flex pt-12 lg:pt-0">
            <div className="w-full lg:bg-slate-900 flex lg:-skew-x-12 lg:pl-10">
              <div className="lg:skew-x-12 md:mt-auto md:w-3/5 w-full m-auto text-slate-200">
                <form
                  className=" flex flex-col justify-around bg-slate-700 p-5 rounded-lg w-full"
                  ref={formRef}
                  onSubmit={sendEmail}
                >
                  <p className=" text-center pb-5 font-bold text-lg">
                    {icons.contactsInfinite} &nbsp; &nbsp;
                    {t("contacts.formTitle")}
                  </p>
                  <input
                    type="text"
                    name="name"
                    className="p-2 mb-1 bg-slate-600 rounded-lg"
                    placeholder={t("contacts.firstName")}
                    onChange={inputHandle}
                    value={data.name}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    className="p-2 mb-1 bg-slate-600 rounded-lg"
                    placeholder={t("contacts.lastName")}
                    onChange={inputHandle}
                    value={data.lastName}
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="p-2 mb-1 bg-slate-600 rounded-lg"
                    placeholder={t("contacts.email")}
                    onChange={inputHandle}
                    value={data.user_email}
                    required
                  />
                  <textarea
                    className="bg-slate-600 p-2 rounded-lg"
                    placeholder={t("contacts.message")}
                    onChange={inputHandle}
                    name="message"
                    value={data.message}
                    rows="5"
                    required
                  ></textarea>
                  <input
                    className="hidden"
                    name="site_name"
                    value="your portfolio"
                    readOnly
                  />
                  <div className="flex items-center justify-center px-4 pt-4 rounded-b">
                    <button
                      className="text-lg mt-3 px-5 bg-slate-800 py-1 hover:bg-slate-500 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg "
                      type="submit"
                    >
                      {t("contacts.send")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <select className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1">
          <option onClick={handleLanguage} value="en">
            English
          </option>
          <option onClick={handleLanguage} value="it">
            Italiano
          </option>
        </select>
      </div>
      {/* OLD LAYOUT */}
      {/*       <div className="relative p-5 h-5/6">
        <h1 className="text-4xl ">
          {icons.verticalLines} {t("contacts.title")}
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row h-full md:gap-8 sm:pt-12 lg:pt-0">
          <div className="w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="md:rounded-full md:border-8 md:border-double w-96 md:h-96 main1 flex flex-col md:flex-row items-center relative">
              <a
                href="https://github.com/Matstraz "
                className="tr md:absolute mt-5 md:mt-auto"
              >
                <img
                  className="rounded-lg "
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt="github"
                />
              </a>
              <a
                href="https://www.facebook.com/mat.strazzera "
                className="bl mdabsolute mt-5 md:mt-0"
              >
                <img
                  className="rounded-lg "
                  src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/matteo-strazzera-ba26781b8/"
                className="tl md:absolute mt-5 md:mt-auto"
              >
                <img
                  className="rounded-lg "
                  src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="linkedin"
                />
              </a>
              <a
                href="mailto:mat.strazzera@gmail.com"
                className="bot md:absolute mt-5 md:mt-auto"
              >
                <img
                  className="rounded-lg "
                  src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                  alt="gmail"
                />
              </a>
              <a
                href="https://wa.me/393423878435?text=Ciao%20,%20ti%20contatto%20perchè%20ho%20visto%20il%20tuo%20sito"
                className="br md:absolute mt-5 md:mt-auto"
              >
                <img
                  className="rounded-lg "
                  src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-auto md:w-1/2 w-full m-auto text-slate-200">
            <form
              className=" md:w-3/4 m-auto flex flex-col justify-around bg-slate-700 p-5 rounded-lg"
              ref={formRef}
              onSubmit={sendEmail}
            >
              <p className=" text-center pb-5 font-bold text-lg">
                {icons.contactsInfinite} &nbsp; &nbsp;
                {t("contacts.formTitle")}
              </p>
              <input
                type="text"
                name="name"
                className="p-2 mb-1 bg-slate-600 rounded-lg"
                placeholder={t("contacts.firstName")}
                onChange={inputHandle}
                value={data.name}
                required
              />
              <input
                type="text"
                name="lastName"
                className="p-2 mb-1 bg-slate-600 rounded-lg"
                placeholder={t("contacts.lastName")}
                onChange={inputHandle}
                value={data.lastName}
                required
              />
              <input
                type="email"
                name="user_email"
                className="p-2 mb-1 bg-slate-600 rounded-lg"
                placeholder={t("contacts.email")}
                onChange={inputHandle}
                value={data.user_email}
                required
              />
              <textarea
                className="bg-slate-600 p-2 rounded-lg"
                placeholder={t("contacts.message")}
                onChange={inputHandle}
                name="message"
                value={data.message}
                rows="5"
                required
              ></textarea>
              <input
                className="hidden"
                name="site_name"
                value="your portfolio"
                readOnly
              />
              <div className="flex items-center justify-center px-4 pt-4 rounded-b">
                <button
                  className="text-lg mt-3 px-5 bg-slate-800 py-1 hover:bg-slate-500 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg "
                  type="submit"
                >
                  {t("contacts.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <select className="hidden md:block absolute top-5 right-5 bg-slate-700 py-1">
          <option onClick={handleLanguage} value="en">
            English
          </option>
          <option onClick={handleLanguage} value="it">
            Italiano
          </option>
        </select>
      </div> */}
    </div>
  );
}
