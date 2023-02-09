import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '../../components';
import * as S from './ReviewsSection.styled';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { bottomFadeVariant } from '../../animations';

const mockData = [
  {
    name: 'Maras',
    review:
      '“A paragraph or two with information on your product/service or describes a problem “  ',
  },
  {
    name: 'akaka',
    review:
      '“A paragraph or two with information on your product/service or describes a problem “  ',
  },
  {
    name: 'Marhyeb111as',
    review:
      '“A paragraph or two with inforwqeqwemation on your product/service or describes a problemvcqwev ewdfsdfsdf sdwdqwd  sdfsd sdfwefzsc sdf sfcwe swd “  ',
  },
];

export const ReviewsSection = () => (
  <S.Wrapper
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.6 }}
    initial="offscreen"
    variants={bottomFadeVariant}
  >
    <Typography.SectionHeader>
      Co ludzie o mnie mówią :)
    </Typography.SectionHeader>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      className="swiper"
    >
      {mockData.map((item) => (
        <SwiperSlide key={item.name} className="swiperSlide">
          <S.Review>
            <Typography.Review>{item.review}</Typography.Review>
            <Typography.Review bold>{item.name}</Typography.Review>
          </S.Review>
        </SwiperSlide>
      ))}
    </Swiper>
  </S.Wrapper>
);
