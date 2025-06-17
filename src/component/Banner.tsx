import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface BannerProps {
    id: string;
    datainfo: {
        image?: {
            desktop: string;
        };
        video?: {
            desktop: string;
        };
        title: string;
        description: string;
        link?: string;
    }[];
    cls: string;
}

const Banner: React.FC<BannerProps> = ({ id, datainfo, cls }) => {
    return (
        <div id={id} className={cls}>
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                pagination={{
                    type: 'fraction',
                    clickable: true,
                }}
                navigation={false}
            >
                {datainfo.map((v, i) => (
                    <SwiperSlide key={i} className="relative w-full h-[40vw]">
                        {v.video?.desktop ? (
                            <video
                                src={v.video.desktop}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : v.image?.desktop ? (
                            <img
                                src={v.image.desktop}
                                alt={v.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                                No media available
                            </div>
                        )}

                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/40">
                            <h2 className="text-3xl font-bold mb-2">{v.title}</h2>
                            <p className="text-lg mb-4">{v.description}</p>
                            {v.link && (
                                <a
                                    href={v.link}
                                    className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                                >
                                    자세히 보기
                                </a>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
