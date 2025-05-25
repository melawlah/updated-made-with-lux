import {
    FaLocationArrow,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useTranslation } from "react-i18next";
  
  const Footer = () => {
    const { t } = useTranslation();
  
    return (
      <section
        id="contactUs"
        className="relative w-full bg-black text-white py-20 px-6 md:px-12"
      >
        {/* Background grid */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/footer-grid.svg"
            alt="Grid Background"
            title="web design company footer image"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
  
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            {t("footer.title.part1")}{" "}
            <span className="text-gray-400">{t("footer.title.part2")}</span>{" "}
            {t("footer.title.part3")}{" "}
            <span className="text-white">{t("footer.title.brand")}</span>?
          </h2>
  
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            {t("footer.subtitle")}
          </p>
  
          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <a href="https://calendly.com/lawlahruth/strategy-session" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-6 py-4 text-base bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 shadow-xl text-center whitespace-normal max-w-xs cursor-pointer">
                <FaLocationArrow />
                {t("footer.cta")}
              </button>
            </a>
          </div>

  
          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href="mailto:hello@madewithlux.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.293 7.293a1 1 0 001.414 0L21 8m0 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2z" />
            </svg>
              hello@madewithlux.com
            </a>
            <a
              href="tel:+14168596406"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h1a2 2 0 012 2v1.28a1 1 0 01-.293.707l-1.414 1.414a17.053 17.053 0 006.586 6.586l1.414-1.414A1 1 0 0116.72 15H18a2 2 0 012 2v1a2 2 0 01-2 2H17c-7.732 0-14-6.268-14-14V5z"
                />
              </svg>
              +1 (416) 859-6406
            </a>
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-16"></div>
  
        {/* Bottom Footer */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
  
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61575338021389"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white hover:text-gray-300 transition text-xl" />
            </a>
            <a
              href="https://www.instagram.com/madewithlux"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white hover:text-gray-300 transition text-xl" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white hover:text-gray-300 transition text-xl" />
            </a> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;
  