import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
import { useClientContext } from '../../../context/ClientProvider';
import {Link, useNavigate} from "react-router-dom";

function CategoriesSlider({ t }) {
    const { categories } = useClientContext();
    const { i18n } = useTranslation();
    const { language: lng } = i18n;
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:dark:text-white">{t('whatAreYouLookingFor')}</h1>
                </div>
                <div>
                    <Link to={'/workers'} className="text-teal-blue dark:dark:text-white font-semibold hover:underline hover:text-bright-yelliw dark:hover:text-teal-blue">
                        {t('seeMore')}
                    </Link>
                </div>
            </div>

            <Carousel
                additionalTransfrom={0}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={1500}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 6,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 3,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 4,
                        partialVisibilityGutter: 30,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {categories
                    ?.filter((item) => item.image)
                    ?.map((item, key) => (
                        <div
                            key={key}
                            className="bg-gray-300  p-5 m-2 rounded-lg text-center shadow-md hover:shadow-lg transition"
                        >
                            <div className="mb-2 sm:mb-4 cursor-pointer" onClick={() => navigate(`/workers?cat_id=${item._id}`)}>
                                <img src={item.image } alt={item?.name?.[lng]} className="rounded-md" />
                            </div>
                            <p className="text-teal-blue e font-semibold text-xs capitalize sm:text-sm">
                                {item?.name?.[lng]}
                            </p>
                        </div>
                    ))}
            </Carousel>
        </>
    );
}

export default CategoriesSlider;
