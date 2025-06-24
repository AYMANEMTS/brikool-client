import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation('navbar');

    return (
        <footer className="flex flex-col space-y-10 pb-10 justify-center ">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link to={"/"} className="hover:text-gray-900" href="#">{t("home")}</Link>
                <Link to={"/workers"} className="hover:text-gray-900" href="#">{t("workers")}</Link>
                <Link to={"/about-us"} className="hover:text-gray-900" href="#">{t("about")}</Link>
            </nav>

            {/*<div className="flex justify-center space-x-5">*/}
            {/*    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">*/}
            {/*        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">*/}
            {/*        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">*/}
            {/*        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">*/}
            {/*        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">*/}
            {/*        <img src="https://img.icons8.com/fluent/30/000000/twitter.png"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {i18n.language === "en" && (
                <p className="text-center text-gray-700 font-medium">
                    &copy; 2022 Brikool. All rights reserved.
                </p>
            )}

            {i18n.language === "fr" && (
                <p className="text-center text-gray-700 font-medium">
                    &copy; 2022 Brikool. Tous droits réservés.
                </p>
            )}

            {i18n.language === "ar" && (
                <p className="text-center text-gray-700 font-medium" dir="rtl">
                    &copy; 2022 بريكول. جميع الحقوق محفوظة.
                </p>
            )}
        </footer>
    );
}
