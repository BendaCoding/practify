import React, { SFC } from "react";
import Flickity from "react-flickity-component";
import { CoverCard } from "../../atoms/CoverCard";
import { H4, H3 } from "../../atoms";
import { Box } from "grid-styled";
import * as S from './styled';

interface ICoverFlickItem {
  coverUrl: string;
  name: string;
  description: string;
}

interface ICoverFlickProps {
  items: ICoverFlickItem[];
  title?: string;
}

export const CoverFlick: SFC<ICoverFlickProps> = ({
  title = '',
  items,
}) => (
  <div>

    <S.Header>
      <H3>{title}</H3>
    </S.Header>

    <Box mx={-2}>
      <Flickity
        options={{
          groupCells: true,
          cellAlign: "left"
        }}
      >
        {items.map((item: any) => (
          <Box key={item.name} width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <Box mx={2}>
              <CoverCard coverUrl={item.coverUrl} mb={2} />
              <H4>{item.name}</H4>
              <div>{item.description}</div>
            </Box>
          </Box>
        ))}
      </Flickity>
    </Box>

  </div>
);
