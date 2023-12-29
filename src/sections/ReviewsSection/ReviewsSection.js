import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './ReviewsSection.styled';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { bottomFadeVariant } from '../../animations';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import { reviewData } from './reviewData';
import { useMediaQuery } from '../../hooks';
import { device } from '../../styles';

export const ReviewsSection = () => {
  const isLaptopView = useMediaQuery(device.laptop);
  const isTabletView = useMediaQuery(device.tablet);

  const getNumberOfSlides = () => {
    if (isLaptopView) return 3;
    if (isTabletView) return 2;
    return 1;
  };

  return (
    <S.Wrapper
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
      initial="offscreen"
      variants={bottomFadeVariant}
    >
      <SectionHeader title="Rekomendacje" />
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={getNumberOfSlides()}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={isTabletView}
        className="swiper"
      >
        {reviewData.map((item) => (
          <SwiperSlide key={item.name} className="swiperSlide">
            <S.Review>
              <S.NameWrapper>
                <p>{item.name}</p>
                <p>{item.surname}</p>
              </S.NameWrapper>
              <S.Info>{item.review}</S.Info>
            </S.Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};
