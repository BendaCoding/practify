import { styled } from 'practify/theme';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr .5fr;
  grid-template-areas:
    "bpmSliderArea bpmSliderArea bpmSliderArea bpmSliderArea"
    ". . . volumeSliderArea "
    "SDSA SDSA . volumeSliderArea "
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
  justify-content:end;
`;

export const VolumeLabel = styled.p`
  text-transform: uppercase;
  transform: rotate(-90deg);
  margin-right:-1.5em;
  color: ${({ theme }) => theme.colors.typo.highlight};
`;

export const BpmSlider = styled.div`
  grid-area: bpmSliderArea;

`;

export const Label = styled.div`
    text-align:left;
    color: ${({ theme }) => theme.colors.typo.highlight};
    text-transform: uppercase;
`;

export const SubdivisionSettings = styled.div`
    grid-area:SDSA
    display:flex;
    flex-direction:column;
`;

export const Subdivision = styled.div`
    font-size:2em;
`;
