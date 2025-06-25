import React from 'react';
import {useTranslation} from "react-i18next";

function AboutUs() {
    const {i18n} = useTranslation();
    return (
        <div className="bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 py-16">
            {i18n.language === "fr" && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-teal-blue">
                            Pourquoi choisir Brikool ?
                        </h2>
                    </div>

                    {/* Section Items */}
                    <div className="space-y-20">
                        {/* Simple Integration */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img
                                    src={"/about1.jpg"}
                                    alt="gem"
                                    className="rounded shadow-lg border border-gray-300 object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Connexion directe avec des artisans qualifiés
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Brikool vous met en contact direct avec des artisans vérifiés et disponibles près de chez vous, sans aucun intermédiaire.
                                </p>
                            </div>
                        </div>

                        {/* Easy Collaboration */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Navigation simple et rapide
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    L’interface intuitive de Brikool permet une utilisation fluide sur tous les appareils, pour trouver un prestataire en quelques clics.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img
                                    src={"/about2.jpg"}
                                    alt="project members"
                                    className="rounded shadow-lg border border-gray-300 object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* No More Syntax Errors */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img
                                    src={"/about3.jpg"}
                                    alt="editor"
                                    className="rounded shadow-lg border border-gray-300 object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Recherche par catégorie et ville
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Filtrez facilement les artisans selon leur métier (plombier, menuisier, etc.) et leur localisation pour un résultat précis et rapide.
                                </p>
                            </div>
                        </div>

                        {/* Bulk Editing */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Valorisation des travailleurs indépendants
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Brikool donne de la visibilité aux artisans locaux en leur offrant un espace pour présenter leurs services et recevoir des avis clients.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img
                                    src={"/about4.jpg"}
                                    alt="bulk editing"
                                    className="rounded shadow-lg border border-gray-300 object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img
                                    src={"/about5.jpg"}
                                    alt="editor"
                                    className="rounded shadow-lg border border-gray-300 object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Gratuit pour les clients
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Toutes les fonctionnalités sont gratuites pour les utilisateurs : consultation, contact et publication de demande de service.                            </p>
                            </div>
                        </div>


                    </div>
                </div>
            )}

            {i18n.language === "en" && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-teal-blue">
                            Why Choose Brikool?
                        </h2>
                    </div>

                    <div className="space-y-20">
                        {/* 1 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about1.jpg" alt="gem" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Direct connection with skilled artisans
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Brikool connects you directly with verified and available artisans near you, with no middlemen.
                                </p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Simple and fast navigation
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Brikool’s intuitive interface offers smooth use on all devices, helping you find a service provider in just a few clicks.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img src="/about2.jpg" alt="project members" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about3.jpg" alt="editor" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Search by category and city
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Easily filter artisans by their trade (plumber, carpenter, etc.) and location for accurate and fast results.
                                </p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Empowering independent workers
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    Brikool gives visibility to local artisans by offering them a space to showcase their services and receive client reviews.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img src="/about4.jpg" alt="bulk editing" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about5.jpg" alt="editor" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    Free for clients
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    All features are free for users: browsing, contacting, and posting service requests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            )}

            {i18n.language === "ar" && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-teal-blue">
                            لماذا تختار بريكول؟
                        </h2>
                    </div>

                    <div className="space-y-20">
                        {/* 1 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8 flex-row-reverse">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about1.jpg" alt="gem" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    اتصال مباشر مع الحرفيين المهرة
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    يربطك بريكول مباشرة مع الحرفيين المعتمدين والمتاحين بالقرب منك بدون وسطاء.
                                </p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8 flex-row-reverse">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    تصفح سهل وسريع
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    يوفر لك بريكول واجهة سهلة الاستخدام وسلسة على جميع الأجهزة، للعثور على مقدم الخدمة في بضع نقرات فقط.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img src="/about2.jpg" alt="project members" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8 flex-row-reverse">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about3.jpg" alt="editor" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    البحث حسب الفئة والمدينة
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    يمكنك تصفية الحرفيين بسهولة حسب التخصص (سباك، نجار...) والموقع للحصول على نتائج دقيقة وسريعة.
                                </p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8 flex-row-reverse">
                            <div className="w-full md:w-1/2 order-2 md:order-1 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    تمكين العمال المستقلين
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    يمنح بريكول الحرفيين المحليين فرصة لعرض خدماتهم واستقبال تقييمات العملاء.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
                                <img src="/about4.jpg" alt="bulk editing" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="flex flex-wrap md:flex-nowrap items-stretch space-x-8 flex-row-reverse">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/about5.jpg" alt="editor" className="rounded shadow-lg border border-gray-300 object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 p-8 rounded-lg flex flex-col justify-center">
                                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-teal-blue">
                                    مجاني للعملاء
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    جميع الميزات مجانية للمستخدمين: التصفح، التواصل، ونشر طلبات الخدمة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default AboutUs;
