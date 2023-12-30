import * as S from './PriceItem.styled';
import { LineSeparator } from '../../../../components';
import { VipInfo } from '../VipInfo/VipInfo';
import { device } from '../../../../styles';
import { useMediaQuery } from '../../../../hooks';

export const PriceItem = ({ service, index }) => {
  const isLaptopView = useMediaQuery(device.laptop);

  return (
    <S.PriceTypeWrapper>
      <S.MainName>{service.title}</S.MainName>
      <LineSeparator />
      <S.CategoryWithVipWrapper>
        <S.CategoryWrapper>
          {service?.category?.map((subCategory) => (
            <S.OneCategory>
              {subCategory.name && (
                <S.CategoryName>{subCategory.name}</S.CategoryName>
              )}

              <S.ItemsWrapper>
                {subCategory.services.map((item) => (
                  <S.Item>
                    <div>
                      <p>{item.subName}</p>
                      {item.info && (
                        <S.Bold>
                          {isLaptopView && ' - '}
                          {item.info}
                        </S.Bold>
                      )}
                    </div>
                    <p>{item.price},-</p>
                  </S.Item>
                ))}
              </S.ItemsWrapper>
            </S.OneCategory>
          ))}
        </S.CategoryWrapper>
        {index === 0 && <VipInfo />}
      </S.CategoryWithVipWrapper>
    </S.PriceTypeWrapper>
  );
};
