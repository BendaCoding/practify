import { styled } from "practify/theme";

export const Screen = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 3px 0.2fr 60% .1fr 1fr 3fr;
  grid-row-gap: 5px;
  text-align: center;


  //Mobile Screen Layout

  grid-template-areas:
    "SteppedProgressBar"
    "heading"
    "exerciseCardArea"
    "infoArea"
    "description"
    "transportArea";

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.lg}) {
    align-items: start;
    text-align:left;
    justify-content: start;
    grid-template-rows: 1fr auto 1fr 1fr .1fr 3px;
    grid-template-columns: 1fr 1.5fr 1fr;

    //Desktop Screen Layout

    grid-template-areas:
      "avatarArea         exerciseCardArea       playlistArea"
      "heading            exerciseCardArea       playlistArea"
      "description        exerciseCardArea       playlistArea"
      "transportArea      exerciseCardArea       playlistArea"
      "infoArea           exerciseCardArea       playlistArea"
      "SteppedProgressBar SteppedProgressBar     SteppedProgressBar";
  }
`;

export const Aside = styled.aside`
  margin-left: ${props => `${props.theme.space[3]}px`};
  padding-top: ${props => `${props.theme.space[3]}px`};
  grid-area: playlistArea;
  align-self: start;
  @media (max-width: ${({ theme: { breakpoint } }) => breakpoint.lg}) {
    display: none;
  }
`;

export const Description = styled.div`
  margin: 0px 20px;
  grid-area: description;
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    text-align:left;
  }
`;

export const TransportControls = styled.div`
  grid-area: transportArea;
  text-align:center;
  align-self:center;
`;

export const Heading = styled.div`
  grid-area: heading;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    align-items: flex-start;
    justify-self: start;
    margin-left: 1rem;
  }
`;

export const ExerciseCard = styled.div`
  grid-area:exerciseCardArea;
  height:100%;
`;

export const Info = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  grid-area:infoArea
  justify-content: space-between;
  p{
    margin-bottom:0;
  }
`;

export const Avatar = styled.div`
  width:60%
  margin:15px;
  padding-bottom:60%;
  background-image:url("https://de.yamaha.com/de/files/drum_sets_1200x480_20c6ba6bf560ece355835f4415814a69.jpg");
  background-size:cover;
  background-position:center;
  grid-area:avatarArea;
  display:none;
  box-shadow:${({theme}) => theme.shadows.regular};
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.lg}) {
    display:block;
  }
`;















