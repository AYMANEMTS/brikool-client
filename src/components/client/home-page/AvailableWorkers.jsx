import React from 'react';
import Carousel from "react-multi-carousel";
import WorkerCard from "../WorkerCard";
import {useClientContext} from "../../../context/ClientProvider";


function AvailableWorkers({t}) {
    const {workers} = useClientContext()
    return (
        <>


            <Carousel
                additionalTransfrom={0}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={3500}
                centerMode={false}
                className="h-full  py-5"
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
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
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

                {workers?.map((job, key) => (
                    <div>
                        <div key={key} className={"flex flex-wrap gap-4 justify-center h-full m-2 items-stretch"}>
                            <WorkerCard job={job}/>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default AvailableWorkers;