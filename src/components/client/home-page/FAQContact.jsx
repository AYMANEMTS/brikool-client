import React from "react";
import {Button, Input, Textarea} from "@material-tailwind/react"
import {useTranslation} from "react-i18next";

const FAQContact = () => {
    const {i18n} = useTranslation();
    return (
        <div dir={i18n.dir()} className="text-gray-700 dark:text-white flex items-center justify-center ">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* FAQ Section */}
                {i18n.language === "fr" && (
                    <div>
                        <h1 className="text-3xl font-bold mb-6 text-teal-blue dark:text-white">Questions Fréquemment Posées</h1>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Comment puis-je trouver un artisan près de chez moi ?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Il vous suffit de sélectionner la catégorie de service (plomberie, menuiserie, jardinage…) puis de filtrer par ville. Vous verrez une liste d’artisans disponibles avec leurs profils complets.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Comment contacter un artisan sur Brikool ?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Une fois que vous avez trouvé un profil qui vous intéresse, cliquez sur "Contacter" pour envoyer un message directement via notre interface sécurisée.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Est-ce que Brikool vérifie les profils des artisans ?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Oui, chaque artisan est vérifié manuellement par notre équipe avant d’être publié sur la plateforme, afin de garantir la qualité des services proposés.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Est-ce que Brikool est gratuit ?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    La recherche et le contact avec un artisan sont totalement gratuits pour les utilisateurs. Seuls les artisans peuvent souscrire à des options premium s’ils le souhaitent.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Puis-je laisser un avis après un service ?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Oui. Après chaque intervention, vous avez la possibilité de noter l’artisan et de laisser un commentaire sur votre expérience.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {i18n.language === "en" && (
                    <div>
                        <h1 className="text-3xl font-bold mb-6 text-teal-blue dark:text-white">
                            Frequently Asked Questions
                        </h1>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    How can I find a craftsman near me?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Simply select the service category (plumbing, carpentry, gardening…) and filter by city. You’ll see a list of available craftsmen with their full profiles.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    How can I contact a craftsman on Brikool?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Once you’ve found a profile you’re interested in, click “Contact” to send a message directly through our secure interface.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Does Brikool verify craftsmen’s profiles?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Yes, every craftsman is manually verified by our team before being published on the platform, to ensure the quality of services offered.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Is Brikool free to use?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Searching for and contacting a craftsman is completely free for users. Only craftsmen may subscribe to premium options if they wish.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    Can I leave a review after a service?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Yes. After each job, you can rate the craftsman and leave a comment about your experience.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {i18n.language === "ar" && (
                    <div>
                        <h1 className="text-3xl font-bold mb-6 text-teal-blue dark:text-white">
                            الأسئلة المتكررة
                        </h1>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    كيف يمكنني العثور على حرفي بالقرب مني؟
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    ما عليك سوى اختيار فئة الخدمة (مثل السباكة أو النجارة أو البستنة...) ثم التصفية حسب المدينة. سترى قائمة بالحرفيين المتاحين مع ملفاتهم الشخصية الكاملة.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    كيف يمكنني التواصل مع حرفي على Brikool؟
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    بمجرد العثور على ملف يعجبك، انقر على "تواصل" لإرسال رسالة مباشرة من خلال منصتنا الآمنة.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    هل تقوم Brikool بالتحقق من ملفات الحرفيين؟
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    نعم، يتم التحقق من كل حرفي يدويًا من قبل فريقنا قبل نشره على المنصة لضمان جودة الخدمات المقدمة.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    هل استخدام Brikool مجاني؟
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    البحث والتواصل مع الحرفيين مجاني تمامًا للمستخدمين. فقط الحرفيون يمكنهم الاشتراك في خيارات مميزة إذا رغبوا بذلك.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-teal-blue dark:text-white">
                                    هل يمكنني ترك تقييم بعد الخدمة؟
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    نعم، بعد كل خدمة يمكنك تقييم الحرفي وترك تعليق حول تجربتك.
                                </p>
                            </div>
                        </div>
                    </div>

                )}

                {/* Contact Form */}
                {i18n.language === "en" && (
                    <div className="p-8 h-fit bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-teal-blue dark:text-white">
                            Didn't find your answer in the FAQ? Contact our sales
                        </h2>
                        <form className="space-y-4" id={"FAQ"}>
                            {/* Name Input */}
                            <div>
                                <Input label="Name" type="text" />
                            </div>

                            {/* Email Input */}
                            <div>
                                <Input label="Email" type="email" />
                            </div>

                            {/* Message Input */}
                            <div>
                                <Textarea label={"Message"} />
                            </div>
                            <Button className="w-full ">
                                Send
                            </Button>
                        </form>
                    </div>
                )}

                {i18n.language === "fr" && (
                    <div className="p-8 h-fit bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-teal-blue dark:text-white">
                            Vous n’avez pas trouvé votre réponse dans la FAQ ? Contactez notre équipe commerciale
                        </h2>
                        <form className="space-y-4" id={"FAQ"}>
                            {/* Name Input */}
                            <div>
                                <Input label="Nom" type="text" />
                            </div>

                            {/* Email Input */}
                            <div>
                                <Input label="Email" type="email" />
                            </div>

                            {/* Message Input */}
                            <div>
                                <Textarea label="Message" />
                            </div>
                            <Button className="w-full ">
                                Envoyer
                            </Button>
                        </form>
                    </div>
                )}

                {i18n.language === "ar" && (
                    <div className="p-8 h-fit bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-teal-blue dark:text-white">
                            لم تجد إجابتك في قسم الأسئلة المتكررة؟ تواصل مع فريق المبيعات
                        </h2>
                        <form className="space-y-4" id={"FAQ"}>
                            {/* Name Input */}
                            <div>
                                <Input label="الاسم" type="text" />
                            </div>

                            {/* Email Input */}
                            <div>
                                <Input label="البريد الإلكتروني" type="email" />
                            </div>

                            {/* Message Input */}
                            <div>
                                <Textarea label="رسالتك" />
                            </div>
                            <Button className="w-full ">
                                إرسال
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQContact;
