import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Swiper 스타일 가져오기
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Define the types for the props
interface BannerProps {
    id: string;
    datainfo: {
        image: {
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
                modules={[Autoplay, EffectFade, Pagination]} // 필요한 모듈 등록
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 4000, // 4초마다 롤링
                    disableOnInteraction: false, // 사용자 상호작용 후에도 자동 롤링 유지
                }}
                effect="fade" // 페이드 효과
                pagination={{
                    type: 'fraction', // 페이지네이션을 fraction으로 설정
                    clickable: true, // 페이지네이션 클릭 가능
                }}
                navigation={false} // 앞뒤 버튼 비활성화
            >
                {datainfo.map((v, i) => (
                    <SwiperSlide
                        key={i}
                        style={{
                            backgroundImage: `url(${v.image.desktop})`,
                            backgroundSize: 'auto 100%',
                            backgroundPosition: 'center',
                            height: 'calc(50vw - 8px)',
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-center text-white">
                                <h2>{v.title}</h2>
                                <p>{v.description}</p>
                                {v.link && <a href={v.link}>자세히 보기</a>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;