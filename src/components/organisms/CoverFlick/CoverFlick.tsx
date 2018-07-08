import React, { SFC } from "react";
import Slider, { Settings as SliderSettings } from "react-slick";
import { CoverCard } from "../../atoms/CoverCard";
import { H4, H3 } from "../../atoms";
import { Box, CommonProps } from "grid-styled";
import * as S from './styled';
import { CoverCardWithHoverContent } from "../../molecules";
import { FaPlay } from "react-icons/lib/fa";

interface ICoverFlickItem {
  name: string;
  description: string;
  id: string;
  coverUrl: string;
  onClick?: (id: string) => void;
}

interface ICoverFlickProps extends CommonProps {
  items: ICoverFlickItem[];
  title?: string;
  options?: SliderSettings,
  onClick?: (id: string) => void;
}

const defaultOptions = {
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const CoverFlick: SFC<ICoverFlickProps> = ({
  title = '',
  items,
  options,
  onClick,
  color,
  ...rest
}) => {

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

  return (
    <Box {...rest}>

      <S.Header>
        <H3>{title}</H3>
      </S.Header>

      <Box mx={-2}>
        <Slider {...mergedOptions}>

          {items.map((item: any) => {

            const itemClickHandler = item.onClick
              ? () => item.onClick(item.id)
              : onClick
                ? () => onClick(item.id)
                : null;

            return (
              <Box key={item.name} width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
                <Box mx={2}>
                  
                  <CoverCardWithHoverContent coverUrl={item.coverUrl} mb={2} onClick={itemClickHandler}>
                    <FaPlay size="14%" />
                  </CoverCardWithHoverContent>

                  <H4>{item.name}</H4>
                  <div>{item.description}</div>
                </Box>
              </Box>
          )})}

        </Slider>
      </Box>

    </Box>
  );
}
