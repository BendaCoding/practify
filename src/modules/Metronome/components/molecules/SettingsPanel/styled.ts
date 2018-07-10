import { styled } from 'practify/theme';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr .5fr;
  grid-template-areas:
    "bpmSliderArea bpmSliderArea bpmSliderArea bpmSliderArea"
    ". . . volumeSliderArea "
    ". . . volumeSliderArea "
    ". . . volumeSliderArea "
    ". . . volumeSliderArea ";
   padding:1em;
   height:100%;
`;

export const VolumeSlider = styled.div`
  grid-area: volumeSliderArea;
  height: 100%;
  display:flex;
  align-items:start;
`;

export const VolumeLabel = styled.p`
  text-transform: uppercase;
  transform: rotate(-90deg);
  margin-right:-1.5em;
  color: ${({theme}) => theme.colors.typo.highlight};
`;

export const BpmSlider = styled.div`
  grid-area: bpmSliderArea;

`;

export const BpmLabel = styled.div`
    text-align:left;
    color: ${({theme}) => theme.colors.typo.highlight};
    text-transform: uppercase;
`;
