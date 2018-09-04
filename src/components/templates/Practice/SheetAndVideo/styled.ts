import { mixins, styled } from 'practify/theme';

export const YoutubeWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;

export const VideoWrapper = styled.div`
  ${mixins.absoluteFill(10)};

  iframe {
    width: 100%;
    height: 100%;
  }
`;
